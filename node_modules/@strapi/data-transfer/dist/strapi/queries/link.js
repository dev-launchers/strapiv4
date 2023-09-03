"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinkQuery = void 0;
const fp_1 = require("lodash/fp");
// TODO: Remove any types when we'll have types for DB metadata
const createLinkQuery = (strapi, trx) => {
    const query = () => {
        const { connection } = strapi.db;
        async function* generateAllForAttribute(uid, fieldName) {
            const metadata = strapi.db.metadata.get(uid);
            if (!metadata) {
                throw new Error(`No metadata found for ${uid}`);
            }
            const attributes = filterValidRelationalAttributes(metadata.attributes);
            if (!(fieldName in attributes)) {
                throw new Error(`${fieldName} is not a valid relational attribute name`);
            }
            const attribute = attributes[fieldName];
            const kind = getLinkKind(attribute, uid);
            const { relation, target } = attribute;
            // The relation is stored in the same table
            // TODO: handle manyToOne joinColumn
            if (attribute.joinColumn) {
                const joinColumnName = attribute.joinColumn.name;
                const qb = connection.queryBuilder().select('id', joinColumnName).from(metadata.tableName);
                if (trx) {
                    qb.transacting(trx);
                }
                // TODO: stream the query to improve performances
                const entries = await qb;
                for (const entry of entries) {
                    const ref = entry[joinColumnName];
                    if (ref !== null) {
                        yield {
                            kind,
                            relation,
                            left: { type: uid, ref: entry.id, field: fieldName },
                            right: { type: target, ref },
                        };
                    }
                }
            }
            // The relation uses a join table
            if (attribute.joinTable) {
                const { name, joinColumn, inverseJoinColumn, orderColumnName, morphColumn, inverseOrderColumnName, } = attribute.joinTable;
                const qb = connection.queryBuilder().from(name);
                const columns = {
                    left: { ref: null },
                    right: { ref: null },
                };
                const left = { type: uid, field: fieldName };
                const right = {};
                if (kind === 'relation.basic' || kind === 'relation.circular') {
                    right.type = attribute.target;
                    right.field = attribute.inversedBy;
                    columns.left.ref = joinColumn.name;
                    columns.right.ref = inverseJoinColumn.name;
                    if (orderColumnName) {
                        columns.left.order = orderColumnName;
                    }
                    if (inverseOrderColumnName) {
                        columns.right.order = inverseOrderColumnName;
                    }
                }
                if (kind === 'relation.morph') {
                    columns.left.ref = joinColumn.name;
                    columns.right.ref = morphColumn.idColumn.name;
                    columns.right.type = morphColumn.typeColumn.name;
                    columns.right.field = 'field';
                    columns.right.order = 'order';
                }
                const validColumns = [
                    // Left
                    columns.left.ref,
                    columns.left.order,
                    // Right
                    columns.right.ref,
                    columns.right.type,
                    columns.right.field,
                    columns.right.order,
                ].filter((column) => !(0, fp_1.isNil)(column));
                qb.select(validColumns);
                if (trx) {
                    qb.transacting(trx);
                }
                // TODO: stream the query to improve performances
                const entries = await qb;
                for (const entry of entries) {
                    if (columns.left.ref) {
                        left.ref = entry[columns.left.ref];
                    }
                    if (columns.right.ref) {
                        right.ref = entry[columns.right.ref];
                    }
                    if (columns.left.order) {
                        left.pos = entry[columns.left.order];
                    }
                    if (columns.right.order) {
                        right.pos = entry[columns.right.order];
                    }
                    if (columns.right.type) {
                        right.type = entry[columns.right.type];
                    }
                    if (columns.right.field) {
                        right.field = entry[columns.right.field];
                    }
                    const link = {
                        kind,
                        relation,
                        left: (0, fp_1.clone)(left),
                        right: (0, fp_1.clone)(right),
                    };
                    yield link;
                }
            }
        }
        async function* generateAll(uid) {
            const metadata = strapi.db.metadata.get(uid);
            if (!metadata) {
                throw new Error(`No metadata found for ${uid}`);
            }
            const attributes = filterValidRelationalAttributes(metadata.attributes);
            for (const fieldName of Object.keys(attributes)) {
                for await (const link of generateAllForAttribute(uid, fieldName)) {
                    yield link;
                }
            }
        }
        const insert = async (link) => {
            const { kind, left, right } = link;
            const metadata = strapi.db.metadata.get(left.type);
            const attribute = metadata.attributes[left.field];
            const payload = {};
            if (attribute.joinColumn) {
                const joinColumnName = attribute.joinColumn.name;
                const qb = connection(metadata.tableName)
                    .where('id', left.ref)
                    .update({ [joinColumnName]: right.ref });
                if (trx) {
                    qb.transacting(trx);
                }
                await qb;
            }
            if (attribute.joinTable) {
                const { name, joinColumn, inverseJoinColumn, orderColumnName, inverseOrderColumnName, morphColumn, } = attribute.joinTable;
                if (joinColumn) {
                    Object.assign(payload, { [joinColumn.name]: left.ref });
                }
                const assignInverseColumn = () => {
                    if (inverseJoinColumn) {
                        Object.assign(payload, {
                            [inverseJoinColumn.name]: right.ref,
                        });
                    }
                };
                const assignOrderColumns = () => {
                    if (orderColumnName) {
                        Object.assign(payload, { [orderColumnName]: left.pos ?? null });
                    }
                    if (inverseOrderColumnName) {
                        Object.assign(payload, { [inverseOrderColumnName]: right.pos ?? null });
                    }
                };
                const assignMorphColumns = () => {
                    const { idColumn, typeColumn } = morphColumn ?? {};
                    if (idColumn) {
                        Object.assign(payload, { [idColumn.name]: right.ref });
                    }
                    if (typeColumn) {
                        Object.assign(payload, { [typeColumn.name]: right.type });
                    }
                    Object.assign(payload, { order: right.pos ?? null, field: right.field ?? null });
                };
                if (kind === 'relation.basic' || kind === 'relation.circular') {
                    assignInverseColumn();
                }
                if (kind === 'relation.morph') {
                    assignMorphColumns();
                }
                assignOrderColumns();
                const qb = connection.insert(payload).into(name);
                if (trx) {
                    qb.transacting(trx);
                }
                await qb;
            }
        };
        return { generateAll, generateAllForAttribute, insert };
    };
    return query;
};
exports.createLinkQuery = createLinkQuery;
const filterValidRelationalAttributes = (attributes) => {
    const isOwner = (attribute) => {
        return attribute.owner || (!attribute.mappedBy && !attribute.morphBy);
    };
    const isComponentLike = (attribute) => {
        return attribute.component || attribute.components;
    };
    return Object.entries(attributes)
        .filter(([, attribute]) => {
        return attribute.type === 'relation' && isOwner(attribute) && !isComponentLike(attribute);
    })
        .reduce((acc, [key, attribute]) => ({ ...acc, [key]: attribute }), {});
};
const getLinkKind = (attribute, uid) => {
    if (attribute.relation.startsWith('morph')) {
        return 'relation.morph';
    }
    if (attribute.target === uid) {
        return 'relation.circular';
    }
    return 'relation.basic';
};
//# sourceMappingURL=link.js.map