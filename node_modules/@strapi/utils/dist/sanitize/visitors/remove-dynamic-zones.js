"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_types_1 = require("../../content-types");
const visitor = ({ key, attribute }, { remove }) => {
    if ((0, content_types_1.isDynamicZoneAttribute)(attribute)) {
        remove(key);
    }
};
exports.default = visitor;
//# sourceMappingURL=remove-dynamic-zones.js.map