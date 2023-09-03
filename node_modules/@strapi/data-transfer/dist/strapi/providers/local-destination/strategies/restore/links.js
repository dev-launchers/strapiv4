"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinksWriteStream = void 0;
const stream_1 = require("stream");
const providers_1 = require("../../../../../errors/providers");
const link_1 = require("../../../../queries/link");
const createLinksWriteStream = (mapID, strapi, transaction) => {
    return new stream_1.Writable({
        objectMode: true,
        async write(link, _encoding, callback) {
            await transaction?.attach(async (trx) => {
                const { left, right } = link;
                const query = (0, link_1.createLinkQuery)(strapi, trx);
                // Map IDs if needed
                left.ref = mapID(left.type, left.ref) ?? left.ref;
                right.ref = mapID(right.type, right.ref) ?? right.ref;
                try {
                    await query().insert(link);
                }
                catch (e) {
                    if (e instanceof Error) {
                        return callback(e);
                    }
                    return callback(new providers_1.ProviderTransferError(`An error happened while trying to import a ${left.type} link.`));
                }
                callback(null);
            });
        },
    });
};
exports.createLinksWriteStream = createLinksWriteStream;
//# sourceMappingURL=links.js.map