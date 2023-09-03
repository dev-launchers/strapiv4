"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("lodash/fp");
const factory_1 = __importDefault(require("./factory"));
const ORDERS = { asc: 'asc', desc: 'desc' };
const ORDER_VALUES = Object.values(ORDERS);
const isSortOrder = (value) => ORDER_VALUES.includes(value.toLowerCase());
const isStringArray = (value) => Array.isArray(value) && value.every(fp_1.isString);
const isObjectArray = (value) => Array.isArray(value) && value.every(fp_1.isObject);
const isNestedSorts = (value) => (0, fp_1.isString)(value) && value.split(',').length > 1;
const isObj = (value) => (0, fp_1.isObject)(value);
const sort = (0, factory_1.default)()
    .intercept(
// String with chained sorts (foo,bar,foobar) => split, map(recurse), then recompose
isNestedSorts, async (visitor, options, sort, { recurse }) => {
    return Promise.all(sort
        .split(',')
        .map(fp_1.trim)
        .map((nestedSort) => recurse(visitor, options, nestedSort))).then((res) => res.filter((part) => !(0, fp_1.isEmpty)(part)).join(','));
})
    .intercept(
// Array of strings ['foo', 'foo,bar'] => map(recurse), then filter out empty items
isStringArray, async (visitor, options, sort, { recurse }) => {
    return Promise.all(sort.map((nestedSort) => recurse(visitor, options, nestedSort))).then((res) => res.filter((nestedSort) => !(0, fp_1.isEmpty)(nestedSort)));
})
    .intercept(
// Array of objects [{ foo: 'asc' }, { bar: 'desc', baz: 'asc' }] => map(recurse), then filter out empty items
isObjectArray, async (visitor, options, sort, { recurse }) => {
    return Promise.all(sort.map((nestedSort) => recurse(visitor, options, nestedSort))).then((res) => res.filter((nestedSort) => !(0, fp_1.isEmpty)(nestedSort)));
})
    // Parse string values
    .parse(fp_1.isString, () => {
    const tokenize = (0, fp_1.pipe)((0, fp_1.split)('.'), (0, fp_1.map)((0, fp_1.split)(':')), fp_1.flatten);
    const recompose = (parts) => {
        if (parts.length === 0) {
            return undefined;
        }
        return parts.reduce((acc, part) => {
            if ((0, fp_1.isEmpty)(part)) {
                return acc;
            }
            if (acc === '') {
                return part;
            }
            return isSortOrder(part) ? `${acc}:${part}` : `${acc}.${part}`;
        }, '');
    };
    return {
        transform: fp_1.trim,
        remove(key, data) {
            const [root] = tokenize(data);
            return root === key ? undefined : data;
        },
        set(key, value, data) {
            const [root] = tokenize(data);
            if (root !== key) {
                return data;
            }
            return (0, fp_1.isNil)(value) ? root : `${root}.${value}`;
        },
        keys(data) {
            const v = (0, fp_1.first)(tokenize(data));
            return v ? [v] : [];
        },
        get(key, data) {
            const [root, ...rest] = tokenize(data);
            return key === root ? recompose(rest) : undefined;
        },
    };
})
    // Parse object values
    .parse(isObj, () => ({
    transform: fp_1.cloneDeep,
    remove(key, data) {
        const { [key]: ignored, ...rest } = data;
        return rest;
    },
    set(key, value, data) {
        return { ...data, [key]: value };
    },
    keys(data) {
        return Object.keys(data);
    },
    get(key, data) {
        return data[key];
    },
}))
    // Handle deep sort on relation
    .onRelation(async ({ key, value, attribute, visitor, path }, { set, recurse }) => {
    const isMorphRelation = attribute.relation.toLowerCase().startsWith('morph');
    if (isMorphRelation) {
        return;
    }
    const targetSchemaUID = attribute.target;
    const targetSchema = strapi.getModel(targetSchemaUID);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
})
    // Handle deep sort on media
    .onMedia(async ({ key, path, visitor, value }, { recurse, set }) => {
    const targetSchemaUID = 'plugin::upload.file';
    const targetSchema = strapi.getModel(targetSchemaUID);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
})
    // Handle deep sort on components
    .onComponent(async ({ key, value, visitor, path, attribute }, { recurse, set }) => {
    const targetSchema = strapi.getModel(attribute.component);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
});
exports.default = (0, fp_1.curry)(sort.traverse);
//# sourceMappingURL=query-sort.js.map