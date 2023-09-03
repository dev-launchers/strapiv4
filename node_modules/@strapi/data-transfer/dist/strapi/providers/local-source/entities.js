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
exports.createEntitiesTransformStream = exports.createEntitiesStream = void 0;
const stream_1 = require("stream");
const shared = __importStar(require("../../queries"));
/**
 * Generate and consume content-types streams in order to stream each entity individually
 */
const createEntitiesStream = (strapi) => {
    const contentTypes = Object.values(strapi.contentTypes);
    async function* contentTypeStreamGenerator() {
        for (const contentType of contentTypes) {
            const query = shared.entity.createEntityQuery(strapi).call(null, contentType.uid);
            const stream = strapi.db
                // Create a query builder instance (default type is 'select')
                .queryBuilder(contentType.uid)
                // Fetch all columns
                .select('*')
                // Apply the populate
                .populate(query.deepPopulateComponentLikeQuery)
                // Get a readable stream
                .stream();
            yield { contentType, stream };
        }
    }
    return stream_1.Readable.from((async function* entitiesGenerator() {
        for await (const { stream, contentType } of contentTypeStreamGenerator()) {
            try {
                for await (const entity of stream) {
                    yield { entity, contentType };
                }
            }
            catch {
                // ignore
            }
            finally {
                stream.destroy();
            }
        }
    })());
};
exports.createEntitiesStream = createEntitiesStream;
/**
 * Create an entity transform stream which convert the output of
 * the multi-content-types stream to the transfer entity format
 */
const createEntitiesTransformStream = () => {
    return new stream_1.PassThrough({
        objectMode: true,
        transform(data, _encoding, callback) {
            const { entity, contentType } = data;
            const { id, ...attributes } = entity;
            callback(null, {
                type: contentType.uid,
                id,
                data: attributes,
            });
        },
    });
};
exports.createEntitiesTransformStream = createEntitiesTransformStream;
//# sourceMappingURL=entities.js.map