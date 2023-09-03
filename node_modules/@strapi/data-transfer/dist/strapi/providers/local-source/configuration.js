"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationStream = void 0;
const stream_chain_1 = require("stream-chain");
const stream_1 = require("stream");
const fp_1 = require("lodash/fp");
/**
 * Create a readable stream that export the Strapi app configuration
 */
const createConfigurationStream = (strapi) => {
    return stream_1.Readable.from((async function* configurationGenerator() {
        // Core Store
        const coreStoreStream = (0, stream_chain_1.chain)([
            strapi.db.queryBuilder('strapi::core-store').stream(),
            (data) => (0, fp_1.set)('value', JSON.parse(data.value), data),
            wrapConfigurationItem('core-store'),
        ]);
        // Webhook
        const webhooksStream = (0, stream_chain_1.chain)([
            strapi.db.queryBuilder('webhook').stream(),
            wrapConfigurationItem('webhook'),
        ]);
        const streams = [coreStoreStream, webhooksStream];
        for (const stream of streams) {
            for await (const item of stream) {
                yield item;
            }
        }
    })());
};
exports.createConfigurationStream = createConfigurationStream;
const wrapConfigurationItem = (type) => (value) => ({
    type,
    value,
});
//# sourceMappingURL=configuration.js.map