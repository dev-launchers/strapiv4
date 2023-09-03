"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysDeep = exports.removeUndefined = void 0;
const lodash_1 = __importDefault(require("lodash"));
const removeUndefined = (obj) => lodash_1.default.pickBy(obj, (value) => typeof value !== 'undefined');
exports.removeUndefined = removeUndefined;
const keysDeep = (obj, path = []) => !lodash_1.default.isObject(obj)
    ? [path.join('.')]
    : lodash_1.default.reduce(obj, (acc, next, key) => lodash_1.default.concat(acc, keysDeep(next, [...path, key])), []);
exports.keysDeep = keysDeep;
//# sourceMappingURL=object-formatting.js.map