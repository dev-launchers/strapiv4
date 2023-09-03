"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTarEntryStream = exports.createFilePathFactory = void 0;
const stream_1 = require("stream");
const path_1 = require("path");
/**
 * Create a file path factory for a given path & prefix.
 * Upon being called, the factory will return a file path for a given index
 */
const createFilePathFactory = (type) => (fileIndex = 0) => {
    // always write tar files with posix paths so we have a standard format for paths regardless of system
    return path_1.posix.join(
    // "{type}" directory
    type, 
    // "${type}_XXXXX.jsonl" file
    `${type}_${String(fileIndex).padStart(5, '0')}.jsonl`);
};
exports.createFilePathFactory = createFilePathFactory;
const createTarEntryStream = (archive, pathFactory, maxSize = 2.56e8) => {
    let fileIndex = 0;
    let buffer = '';
    const flush = async () => {
        if (!buffer) {
            return;
        }
        fileIndex += 1;
        const name = pathFactory(fileIndex);
        const size = buffer.length;
        await new Promise((resolve, reject) => {
            archive.entry({ name, size }, buffer, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
        buffer = '';
    };
    const push = (chunk) => {
        buffer += chunk;
    };
    return new stream_1.Writable({
        async destroy(err, callback) {
            await flush();
            callback(err);
        },
        async write(chunk, _encoding, callback) {
            const size = chunk.length;
            if (chunk.length > maxSize) {
                callback(new Error(`payload too large: ${chunk.length}>${maxSize}`));
                return;
            }
            if (buffer.length + size > maxSize) {
                await flush();
            }
            push(chunk);
            callback(null);
        },
    });
};
exports.createTarEntryStream = createTarEntryStream;
//# sourceMappingURL=utils.js.map