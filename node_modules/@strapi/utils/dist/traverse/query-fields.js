"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("lodash/fp");
const factory_1 = __importDefault(require("./factory"));
const isStringArray = (value) => (0, fp_1.isArray)(value) && value.every(fp_1.isString);
const fields = (0, factory_1.default)()
    // Interecept array of strings
    .intercept(isStringArray, async (visitor, options, fields, { recurse }) => {
    return Promise.all(fields.map((field) => recurse(visitor, options, field)));
})
    // Return wildcards as is
    .intercept((value) => (0, fp_1.eq)('*', value), (0, fp_1.constant)('*'))
    // Parse string values
    // Since we're parsing strings only, each value should be an attribute name (and it's value, undefined),
    // thus it shouldn't be possible to set a new value, and get should return the whole data if key === data
    .parse(fp_1.isString, () => ({
    transform: fp_1.trim,
    remove(key, data) {
        return data === key ? undefined : data;
    },
    set(_key, _value, data) {
        return data;
    },
    keys(data) {
        return [data];
    },
    get(key, data) {
        return key === data ? data : undefined;
    },
}));
exports.default = (0, fp_1.curry)(fields.traverse);
//# sourceMappingURL=query-fields.js.map