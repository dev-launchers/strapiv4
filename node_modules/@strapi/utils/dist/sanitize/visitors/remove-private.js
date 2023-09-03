"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_types_1 = require("../../content-types");
const visitor = ({ schema, key, attribute }, { remove }) => {
    if (!attribute) {
        return;
    }
    const isPrivate = attribute.private === true || (0, content_types_1.isPrivateAttribute)(schema, key);
    if (isPrivate) {
        remove(key);
    }
};
exports.default = visitor;
//# sourceMappingURL=remove-private.js.map