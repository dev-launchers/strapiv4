"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinksStream = void 0;
const stream_1 = require("stream");
const link_1 = require("../../queries/link");
/**
 * Create a Readable which will stream all the links from a Strapi instance
 */
const createLinksStream = (strapi) => {
    const uids = [...Object.keys(strapi.contentTypes), ...Object.keys(strapi.components)];
    // Async generator stream that returns every link from a Strapi instance
    return stream_1.Readable.from((async function* linkGenerator() {
        const query = (0, link_1.createLinkQuery)(strapi);
        for (const uid of uids) {
            const generator = query().generateAll(uid);
            for await (const link of generator) {
                yield link;
            }
        }
    })());
};
exports.createLinksStream = createLinksStream;
//# sourceMappingURL=links.js.map