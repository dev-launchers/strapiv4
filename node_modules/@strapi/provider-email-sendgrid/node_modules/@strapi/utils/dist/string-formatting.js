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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinBy = exports.startsWithANumber = exports.toRegressedEnumValue = exports.toKebabCase = exports.isKebabCase = exports.isCamelCase = exports.stringEquals = exports.stringIncludes = exports.escapeQuery = exports.getCommonPath = exports.getCommonBeginning = exports.nameToCollectionName = exports.nameToSlug = void 0;
const lodash_1 = __importStar(require("lodash"));
const fp_1 = require("lodash/fp");
const slugify_1 = __importDefault(require("@sindresorhus/slugify"));
const nameToSlug = (name, options = { separator: '-' }) => (0, slugify_1.default)(name, options);
exports.nameToSlug = nameToSlug;
const nameToCollectionName = (name) => (0, slugify_1.default)(name, { separator: '_' });
exports.nameToCollectionName = nameToCollectionName;
const toRegressedEnumValue = (value) => (0, slugify_1.default)(value, {
    decamelize: false,
    lowercase: false,
    separator: '_',
});
exports.toRegressedEnumValue = toRegressedEnumValue;
const getCommonBeginning = (...strings) => lodash_1.default.takeWhile(strings[0], (char, index) => strings.every((string) => string[index] === char)).join('');
exports.getCommonBeginning = getCommonBeginning;
const getCommonPath = (...paths) => {
    const [segments, ...otherSegments] = paths.map((it) => lodash_1.default.split(it, '/'));
    return lodash_1.default.join(lodash_1.default.takeWhile(segments, (str, index) => otherSegments.every((it) => it[index] === str)), '/');
};
exports.getCommonPath = getCommonPath;
const escapeQuery = (query, charsToEscape, escapeChar = '\\') => {
    return query
        .split('')
        .reduce((escapedQuery, char) => charsToEscape.includes(char)
        ? `${escapedQuery}${escapeChar}${char}`
        : `${escapedQuery}${char}`, '');
};
exports.escapeQuery = escapeQuery;
const stringIncludes = (arr, val) => arr.map(String).includes(String(val));
exports.stringIncludes = stringIncludes;
const stringEquals = (a, b) => String(a) === String(b);
exports.stringEquals = stringEquals;
const isCamelCase = (value) => /^[a-z][a-zA-Z0-9]+$/.test(value);
exports.isCamelCase = isCamelCase;
const isKebabCase = (value) => /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(value);
exports.isKebabCase = isKebabCase;
const startsWithANumber = (value) => /^[0-9]/.test(value);
exports.startsWithANumber = startsWithANumber;
const joinBy = (joint, ...args) => {
    const trim = (0, fp_1.trimChars)(joint);
    const trimEnd = (0, fp_1.trimCharsEnd)(joint);
    const trimStart = (0, fp_1.trimCharsStart)(joint);
    return args.reduce((url, path, index) => {
        if (args.length === 1)
            return path;
        if (index === 0)
            return trimEnd(path);
        if (index === args.length - 1)
            return url + joint + trimStart(path);
        return url + joint + trim(path);
    }, '');
};
exports.joinBy = joinBy;
const toKebabCase = (value) => (0, lodash_1.kebabCase)(value);
exports.toKebabCase = toKebabCase;
//# sourceMappingURL=string-formatting.js.map