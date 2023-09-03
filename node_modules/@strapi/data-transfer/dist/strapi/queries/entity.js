"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntityQuery = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const componentsService = __importStar(require("@strapi/strapi/lib/services/entity-service/components"));
const fp_1 = require("lodash/fp");
const sanitizeComponentLikeAttributes = (model, data) => {
    const { attributes } = model;
    const componentLikeAttributesKey = Object.entries(attributes)
        .filter(([, attribute]) => attribute.type === 'component' || attribute.type === 'dynamiczone')
        .map(([key]) => key);
    return (0, fp_1.omit)(componentLikeAttributesKey, data);
};
const omitInvalidCreationAttributes = (0, fp_1.omit)(['id']);
const createEntityQuery = (strapi) => {
    const components = {
        async assignToEntity(uid, data) {
            const model = strapi.getModel(uid);
            const entityComponents = await componentsService.createComponents(uid, data);
            const dataWithoutComponents = sanitizeComponentLikeAttributes(model, data);
            return (0, fp_1.assign)(entityComponents, dataWithoutComponents);
        },
        async get(uid, entity) {
            return componentsService.getComponents(uid, entity);
        },
        delete(uid, componentsToDelete) {
            return componentsService.deleteComponents(uid, componentsToDelete, { loadComponents: false });
        },
    };
    const query = (uid) => {
        const create = async (params) => {
            const dataWithComponents = await components.assignToEntity(uid, params.data);
            const sanitizedData = omitInvalidCreationAttributes(dataWithComponents);
            return strapi.db.query(uid).create({ ...params, data: sanitizedData });
        };
        const createMany = async (params) => {
            return (Promise.resolve(params.data)
                // Create components for each entity
                .then((0, fp_1.map)((data) => components.assignToEntity(uid, data)))
                // Remove unwanted attributes
                .then((0, fp_1.map)(omitInvalidCreationAttributes))
                // Execute a strapi db createMany query with all the entities + their created components
                .then((data) => strapi.db.query(uid).createMany({ ...params, data })));
        };
        const deleteMany = async (params) => {
            const entitiesToDelete = await strapi.db.query(uid).findMany(params ?? {});
            if (!entitiesToDelete.length) {
                return null;
            }
            const componentsToDelete = await Promise.all(entitiesToDelete.map((entityToDelete) => components.get(uid, entityToDelete)));
            const deletedEntities = await strapi.db.query(uid).deleteMany(params);
            await Promise.all(componentsToDelete.map((compos) => components.delete(uid, compos)));
            return deletedEntities;
        };
        const getDeepPopulateComponentLikeQuery = (contentType, params = { select: '*' }) => {
            const { attributes } = contentType;
            const populate = {};
            const entries = Object.entries(attributes);
            for (const [key, attribute] of entries) {
                if (attribute.type === 'component') {
                    const component = strapi.getModel(attribute.component);
                    const subPopulate = getDeepPopulateComponentLikeQuery(component, params);
                    if (((0, fp_1.isArray)(subPopulate) || (0, fp_1.isObject)(subPopulate)) && (0, fp_1.size)(subPopulate) > 0) {
                        populate[key] = { ...params, populate: subPopulate };
                    }
                    if ((0, fp_1.isArray)(subPopulate) && (0, fp_1.isEmpty)(subPopulate)) {
                        populate[key] = { ...params };
                    }
                }
                if (attribute.type === 'dynamiczone') {
                    const { components: componentsUID } = attribute;
                    const on = {};
                    for (const componentUID of componentsUID) {
                        const component = strapi.getModel(componentUID);
                        const subPopulate = getDeepPopulateComponentLikeQuery(component, params);
                        if (((0, fp_1.isArray)(subPopulate) || (0, fp_1.isObject)(subPopulate)) && (0, fp_1.size)(subPopulate) > 0) {
                            on[componentUID] = { ...params, populate: subPopulate };
                        }
                        if ((0, fp_1.isArray)(subPopulate) && (0, fp_1.isEmpty)(subPopulate)) {
                            on[componentUID] = { ...params };
                        }
                    }
                    populate[key] = (0, fp_1.size)(on) > 0 ? { on } : true;
                }
            }
            const values = Object.values(populate);
            if (values.every((value) => value === true)) {
                return Object.keys(populate);
            }
            return populate;
        };
        return {
            create,
            createMany,
            deleteMany,
            getDeepPopulateComponentLikeQuery,
            get deepPopulateComponentLikeQuery() {
                const contentType = strapi.getModel(uid);
                return getDeepPopulateComponentLikeQuery(contentType);
            },
        };
    };
    return query;
};
exports.createEntityQuery = createEntityQuery;
//# sourceMappingURL=entity.js.map