"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("lodash/fp");
exports.default = (restrictedFields = null) => ({ key, path: { attribute: path } }, { remove }) => {
    // Remove all fields
    if (restrictedFields === null) {
        remove(key);
        return;
    }
    // Ignore invalid formats
    if (!(0, fp_1.isArray)(restrictedFields)) {
        return;
    }
    // Remove if an exact match was found
    if (restrictedFields.includes(path)) {
        remove(key);
        return;
    }
    // Remove nested matches
    const isRestrictedNested = restrictedFields.some((allowedPath) => path?.toString().startsWith(`${allowedPath}.`));
    if (isRestrictedNested) {
        remove(key);
    }
};
//# sourceMappingURL=restricted-fields.js.map