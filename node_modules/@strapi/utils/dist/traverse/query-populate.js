"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("lodash/fp");
const factory_1 = __importDefault(require("./factory"));
const content_types_1 = require("../content-types");
const isKeyword = (keyword) => {
    return ({ key, attribute }) => {
        return !attribute && keyword === key;
    };
};
const isStringArray = (value) => (0, fp_1.isArray)(value) && value.every(fp_1.isString);
const isObj = (value) => (0, fp_1.isObject)(value);
const populate = (0, factory_1.default)()
    // Array of strings ['foo', 'foo.bar'] => map(recurse), then filter out empty items
    .intercept(isStringArray, async (visitor, options, populate, { recurse }) => {
    return Promise.all(populate.map((nestedPopulate) => recurse(visitor, options, nestedPopulate)));
})
    // Return wildcards as is
    .intercept((value) => (0, fp_1.eq)('*', value), (0, fp_1.constant)('*'))
    // Parse string values
    .parse(fp_1.isString, () => {
    const tokenize = (0, fp_1.split)('.');
    const recompose = (0, fp_1.join)('.');
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
    .ignore(({ key, attribute }) => {
    return ['sort', 'filters', 'fields'].includes(key) && !attribute;
})
    .on(
// Handle recursion on populate."populate"
isKeyword('populate'), async ({ key, visitor, path, value, schema }, { set, recurse }) => {
    const newValue = await recurse(visitor, { schema, path }, value);
    set(key, newValue);
})
    .on(isKeyword('on'), async ({ key, visitor, path, value }, { set, recurse }) => {
    const newOn = {};
    if (!isObj(value)) {
        return;
    }
    for (const [uid, subPopulate] of Object.entries(value)) {
        const model = strapi.getModel(uid);
        const newPath = { ...path, raw: `${path.raw}[${uid}]` };
        const newSubPopulate = await recurse(visitor, { schema: model, path: newPath }, subPopulate);
        newOn[uid] = newSubPopulate;
    }
    set(key, newOn);
})
    // Handle populate on relation
    .onRelation(async ({ key, value, attribute, visitor, path, schema }, { set, recurse }) => {
    if ((0, content_types_1.isMorphToRelationalAttribute)(attribute)) {
        // Don't traverse values that cannot be parsed
        if (!(0, fp_1.isObject)(value) || !('on' in value && (0, fp_1.isObject)(value?.on))) {
            return;
        }
        // If there is a populate fragment defined, traverse it
        const newValue = await recurse(visitor, { schema, path }, { on: value?.on });
        set(key, { on: newValue });
    }
    const targetSchemaUID = attribute.target;
    const targetSchema = strapi.getModel(targetSchemaUID);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
})
    // Handle populate on media
    .onMedia(async ({ key, path, visitor, value }, { recurse, set }) => {
    const targetSchemaUID = 'plugin::upload.file';
    const targetSchema = strapi.getModel(targetSchemaUID);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
})
    // Handle populate on components
    .onComponent(async ({ key, value, visitor, path, attribute }, { recurse, set }) => {
    const targetSchema = strapi.getModel(attribute.component);
    const newValue = await recurse(visitor, { schema: targetSchema, path }, value);
    set(key, newValue);
})
    // Handle populate on dynamic zones
    .onDynamicZone(async ({ key, value, attribute, schema, visitor, path }, { set, recurse }) => {
    if ((0, fp_1.isObject)(value)) {
        const { components } = attribute;
        const newValue = {};
        // Handle legacy DZ params
        let newProperties = (0, fp_1.omit)('on', value);
        for (const componentUID of components) {
            const componentSchema = strapi.getModel(componentUID);
            newProperties = await recurse(visitor, { schema: componentSchema, path }, newProperties);
        }
        Object.assign(newValue, newProperties);
        // Handle new morph fragment syntax
        if ('on' in value && value.on) {
            const newOn = await recurse(visitor, { schema, path }, { on: value.on });
            // Recompose both syntaxes
            Object.assign(newValue, newOn);
        }
        set(key, newValue);
    }
    else {
        const newValue = await recurse(visitor, { schema, path }, value);
        set(key, newValue);
    }
});
exports.default = (0, fp_1.curry)(populate.traverse);
//# sourceMappingURL=query-populate.js.map