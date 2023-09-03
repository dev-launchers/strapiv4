"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("lodash/fp");
const factory_1 = __importDefault(require("./factory"));
const isObj = (value) => (0, fp_1.isObject)(value);
const filters = (0, factory_1.default)()
    .intercept(
// Intercept filters arrays and apply the traversal to each one individually
fp_1.isArray, async (visitor, options, filters, { recurse }) => {
    return Promise.all(filters.map((filter, i) => {
        // In filters, only operators such as $and, $in, $notIn or $or and implicit operators like [...]
        // can have a value array, thus we can update the raw path but not the attribute one
        const newPath = options.path
            ? { ...options.path, raw: `${options.path.raw}[${i}]` }
            : options.path;
        return recurse(visitor, { ...options, path: newPath }, filter);
    })
    // todo: move that to the visitors
    ).then((res) => res.filter((val) => !((0, fp_1.isObject)(val) && (0, fp_1.isEmpty)(val))));
})
    .intercept(
// Ignore non object filters and return the value as-is
(filters) => !(0, fp_1.isObject)(filters), (_, __, filters) => {
    return filters;
})
    // Parse object values
    .parse(isObj, () => ({
    transform: fp_1.cloneDeep,
    remove(key, data) {
        return (0, fp_1.omit)(key, data);
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
    // Ignore null or undefined values
    .ignore(({ value }) => (0, fp_1.isNil)(value))
    // Recursion on operators (non attributes)
    .on(({ attribute }) => (0, fp_1.isNil)(attribute), async ({ key, visitor, path, value, schema }, { set, recurse }) => {
    set(key, await recurse(visitor, { schema, path }, value));
})
    // Handle relation recursion
    .onRelation(async ({ key, attribute, visitor, path, value }, { set, recurse }) => {
    const isMorphRelation = attribute.relation.toLowerCase().startsWith('morph');
    if (isMorphRelation) {
        return;
    }
    const targetSchemaUID = attribute.target;
    const targetSchema = strapi.getModel(targetSchemaUID);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
})
    .onComponent(async ({ key, attribute, visitor, path, value }, { set, recurse }) => {
    const targetSchema = strapi.getModel(attribute.component);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
})
    // Handle media recursion
    .onMedia(async ({ key, visitor, path, value }, { set, recurse }) => {
    const targetSchemaUID = 'plugin::upload.file';
    const targetSchema = strapi.getModel(targetSchemaUID);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
});
exports.default = (0, fp_1.curry)(filters.traverse);
//# sourceMappingURL=query-filters.js.map