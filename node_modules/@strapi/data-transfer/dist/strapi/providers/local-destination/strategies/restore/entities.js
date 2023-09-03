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
exports.createEntitiesWriteStream = void 0;
const fp_1 = require("lodash/fp");
const stream_1 = require("stream");
const providers_1 = require("../../../../../errors/providers");
const utils_1 = require("../../../../../utils");
const queries = __importStar(require("../../../../queries"));
const createEntitiesWriteStream = (options) => {
    const { strapi, updateMappingTable, transaction } = options;
    const query = queries.entity.createEntityQuery(strapi);
    return new stream_1.Writable({
        objectMode: true,
        async write(entity, _encoding, callback) {
            await transaction?.attach(async () => {
                const { type, id, data } = entity;
                const { create, getDeepPopulateComponentLikeQuery } = query(type);
                const contentType = strapi.getModel(type);
                /**
                 * Resolve the component UID of an entity's attribute based
                 * on a given path (components & dynamic zones only)
                 */
                const resolveType = (paths) => {
                    let cType = contentType;
                    let value = data;
                    for (const path of paths) {
                        value = (0, fp_1.get)(path, value);
                        // Needed when the value of cType should be computed
                        // based on the next value (eg: dynamic zones)
                        if (typeof cType === 'function') {
                            cType = cType(value);
                        }
                        if (path in cType.attributes) {
                            const attribute = cType.attributes[path];
                            if (attribute.type === 'component') {
                                cType = strapi.getModel(attribute.component);
                            }
                            if (attribute.type === 'dynamiczone') {
                                cType = ({ __component }) => strapi.getModel(__component);
                            }
                        }
                    }
                    return cType?.uid;
                };
                try {
                    const created = await create({
                        data,
                        populate: getDeepPopulateComponentLikeQuery(contentType, { select: 'id' }),
                        select: 'id',
                    });
                    // Compute differences between original & new entities
                    const diffs = utils_1.json.diff(data, created);
                    updateMappingTable(type, id, created.id);
                    // For each difference found on an ID attribute,
                    // update the mapping the table accordingly
                    diffs.forEach((diff) => {
                        if (diff.kind === 'modified' && (0, fp_1.last)(diff.path) === 'id') {
                            const target = resolveType(diff.path);
                            // If no type is found for the given path, then ignore the diff
                            if (!target) {
                                return;
                            }
                            const [oldID, newID] = diff.values;
                            updateMappingTable(target, oldID, newID);
                        }
                    });
                }
                catch (e) {
                    if (e instanceof Error) {
                        return callback(e);
                    }
                    return callback(new providers_1.ProviderTransferError(`Failed to create "${type}" (${id})`));
                }
                return callback(null);
            });
        },
    });
};
exports.createEntitiesWriteStream = createEntitiesWriteStream;
//# sourceMappingURL=entities.js.map