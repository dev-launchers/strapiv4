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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecords = void 0;
const providers_1 = require("../../../../../errors/providers");
const queries = __importStar(require("../../../../queries"));
const deleteRecords = async (strapi, options) => {
    const entities = await deleteEntitiesRecord(strapi, options);
    const configuration = await deleteConfigurationRecords(strapi, options);
    return {
        count: entities.count + configuration.count,
        entities,
        configuration,
    };
};
exports.deleteRecords = deleteRecords;
const deleteEntitiesRecord = async (strapi, options = {}) => {
    const { entities } = options;
    const query = queries.entity.createEntityQuery(strapi);
    const contentTypes = Object.values(strapi.contentTypes);
    const contentTypesToClear = contentTypes.filter((contentType) => {
        let keep = true;
        if (entities?.include) {
            keep = entities.include.includes(contentType.uid);
        }
        if (entities?.exclude) {
            keep = !entities.exclude.includes(contentType.uid);
        }
        if (entities?.filters) {
            keep = entities.filters.every((filter) => filter(contentType));
        }
        return keep;
    });
    const [results, updateResults] = useResults(contentTypesToClear.map((contentType) => contentType.uid));
    const deletePromises = contentTypesToClear.map(async (contentType) => {
        const result = await query(contentType.uid).deleteMany(entities?.params);
        if (result) {
            updateResults(result.count || 0, contentType.uid);
        }
    });
    await Promise.all(deletePromises);
    return results;
};
const deleteConfigurationRecords = async (strapi, options = {}) => {
    const { coreStore = true, webhook = true } = options?.configuration ?? {};
    const models = [];
    if (coreStore) {
        models.push('strapi::core-store');
    }
    if (webhook) {
        models.push('webhook');
    }
    const [results, updateResults] = useResults(models);
    const deletePromises = models.map(async (uid) => {
        const result = await strapi.db.query(uid).deleteMany({});
        if (result) {
            updateResults(result.count, uid);
        }
    });
    await Promise.all(deletePromises);
    return results;
};
const useResults = (keys) => {
    const results = {
        count: 0,
        aggregate: keys.reduce((acc, key) => ({ ...acc, [key]: { count: 0 } }), {}),
    };
    const update = (count, key) => {
        if (key) {
            if (!(key in results.aggregate)) {
                throw new providers_1.ProviderTransferError(`Unknown key "${key}" provided in results update`);
            }
            results.aggregate[key].count += count;
        }
        results.count += count;
    };
    return [results, update];
};
__exportStar(require("./entities"), exports);
__exportStar(require("./configuration"), exports);
__exportStar(require("./links"), exports);
//# sourceMappingURL=index.js.map