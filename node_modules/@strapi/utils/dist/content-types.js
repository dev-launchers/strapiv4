"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentTypeRoutePrefix = exports.isKind = exports.isCollectionType = exports.isSingleType = exports.isDraft = exports.getOptions = exports.hasDraftAndPublish = exports.isVisibleAttribute = exports.getTimestamps = exports.getVisibleAttributes = exports.getNonVisibleAttributes = exports.isWritableAttribute = exports.getWritableAttributes = exports.getScalarAttributes = exports.getComponentAttributes = exports.getNonWritableAttributes = exports.constants = exports.isPrivateAttribute = exports.getPrivateAttributes = exports.isTypedAttribute = exports.isMorphToRelationalAttribute = exports.isDynamicZoneAttribute = exports.isComponentAttribute = exports.isRelationalAttribute = exports.isMediaAttribute = exports.isScalarAttribute = void 0;
const lodash_1 = __importDefault(require("lodash"));
const fp_1 = require("lodash/fp");
const SINGLE_TYPE = 'singleType';
const COLLECTION_TYPE = 'collectionType';
const ID_ATTRIBUTE = 'id';
const PUBLISHED_AT_ATTRIBUTE = 'publishedAt';
const CREATED_BY_ATTRIBUTE = 'createdBy';
const UPDATED_BY_ATTRIBUTE = 'updatedBy';
const CREATED_AT_ATTRIBUTE = 'createdAt';
const UPDATED_AT_ATTRIBUTE = 'updatedAt';
const DP_PUB_STATE_LIVE = 'live';
const DP_PUB_STATE_PREVIEW = 'preview';
const DP_PUB_STATES = [DP_PUB_STATE_LIVE, DP_PUB_STATE_PREVIEW];
const constants = {
    ID_ATTRIBUTE,
    PUBLISHED_AT_ATTRIBUTE,
    CREATED_BY_ATTRIBUTE,
    UPDATED_BY_ATTRIBUTE,
    CREATED_AT_ATTRIBUTE,
    UPDATED_AT_ATTRIBUTE,
    DP_PUB_STATES,
    DP_PUB_STATE_LIVE,
    DP_PUB_STATE_PREVIEW,
    SINGLE_TYPE,
    COLLECTION_TYPE,
};
exports.constants = constants;
const getTimestamps = (model) => {
    const attributes = [];
    if ((0, fp_1.has)(CREATED_AT_ATTRIBUTE, model.attributes)) {
        attributes.push(CREATED_AT_ATTRIBUTE);
    }
    if ((0, fp_1.has)(UPDATED_AT_ATTRIBUTE, model.attributes)) {
        attributes.push(UPDATED_AT_ATTRIBUTE);
    }
    return attributes;
};
exports.getTimestamps = getTimestamps;
const getNonWritableAttributes = (model) => {
    if (!model)
        return [];
    const nonWritableAttributes = lodash_1.default.reduce(model.attributes, (acc, attr, attrName) => (attr.writable === false ? acc.concat(attrName) : acc), []);
    return lodash_1.default.uniq([ID_ATTRIBUTE, ...getTimestamps(model), ...nonWritableAttributes]);
};
exports.getNonWritableAttributes = getNonWritableAttributes;
const getWritableAttributes = (model) => {
    if (!model)
        return [];
    return lodash_1.default.difference(Object.keys(model.attributes), getNonWritableAttributes(model));
};
exports.getWritableAttributes = getWritableAttributes;
const isWritableAttribute = (model, attributeName) => {
    return getWritableAttributes(model).includes(attributeName);
};
exports.isWritableAttribute = isWritableAttribute;
const getNonVisibleAttributes = (model) => {
    const nonVisibleAttributes = lodash_1.default.reduce(model.attributes, (acc, attr, attrName) => (attr.visible === false ? acc.concat(attrName) : acc), []);
    return lodash_1.default.uniq([ID_ATTRIBUTE, ...getTimestamps(model), ...nonVisibleAttributes]);
};
exports.getNonVisibleAttributes = getNonVisibleAttributes;
const getVisibleAttributes = (model) => {
    return lodash_1.default.difference(lodash_1.default.keys(model.attributes), getNonVisibleAttributes(model));
};
exports.getVisibleAttributes = getVisibleAttributes;
const isVisibleAttribute = (model, attributeName) => {
    return getVisibleAttributes(model).includes(attributeName);
};
exports.isVisibleAttribute = isVisibleAttribute;
const getOptions = (model) => lodash_1.default.assign({ draftAndPublish: false }, lodash_1.default.get(model, 'options', {}));
exports.getOptions = getOptions;
const hasDraftAndPublish = (model) => lodash_1.default.get(model, 'options.draftAndPublish', false) === true;
exports.hasDraftAndPublish = hasDraftAndPublish;
const isDraft = (data, model) => hasDraftAndPublish(model) && lodash_1.default.get(data, PUBLISHED_AT_ATTRIBUTE) === null;
exports.isDraft = isDraft;
const isSingleType = ({ kind = COLLECTION_TYPE }) => kind === SINGLE_TYPE;
exports.isSingleType = isSingleType;
const isCollectionType = ({ kind = COLLECTION_TYPE }) => kind === COLLECTION_TYPE;
exports.isCollectionType = isCollectionType;
const isKind = (kind) => (model) => model.kind === kind;
exports.isKind = isKind;
const getStoredPrivateAttributes = (model) => (0, fp_1.union)((strapi?.config?.get('api.responses.privateAttributes', []) ?? []), (0, fp_1.getOr)([], 'options.privateAttributes', model));
const getPrivateAttributes = (model) => {
    return lodash_1.default.union(getStoredPrivateAttributes(model), lodash_1.default.keys(lodash_1.default.pickBy(model.attributes, (attr) => !!attr.private)));
};
exports.getPrivateAttributes = getPrivateAttributes;
const isPrivateAttribute = (model, attributeName) => {
    if (model?.attributes?.[attributeName]?.private === true) {
        return true;
    }
    return getStoredPrivateAttributes(model).includes(attributeName);
};
exports.isPrivateAttribute = isPrivateAttribute;
const isScalarAttribute = (attribute) => {
    return !['media', 'component', 'relation', 'dynamiczone'].includes(attribute?.type);
};
exports.isScalarAttribute = isScalarAttribute;
const isMediaAttribute = (attribute) => attribute?.type === 'media';
exports.isMediaAttribute = isMediaAttribute;
const isRelationalAttribute = (attribute) => attribute?.type === 'relation';
exports.isRelationalAttribute = isRelationalAttribute;
const isComponentAttribute = (attribute) => ['component', 'dynamiczone'].includes(attribute?.type);
exports.isComponentAttribute = isComponentAttribute;
const isDynamicZoneAttribute = (attribute) => attribute?.type === 'dynamiczone';
exports.isDynamicZoneAttribute = isDynamicZoneAttribute;
const isMorphToRelationalAttribute = (attribute) => {
    return isRelationalAttribute(attribute) && attribute?.relation?.startsWith?.('morphTo');
};
exports.isMorphToRelationalAttribute = isMorphToRelationalAttribute;
const getComponentAttributes = (schema) => {
    return lodash_1.default.reduce(schema.attributes, (acc, attr, attrName) => {
        if (isComponentAttribute(attr))
            acc.push(attrName);
        return acc;
    }, []);
};
exports.getComponentAttributes = getComponentAttributes;
const getScalarAttributes = (schema) => {
    return lodash_1.default.reduce(schema.attributes, (acc, attr, attrName) => {
        if (isScalarAttribute(attr))
            acc.push(attrName);
        return acc;
    }, []);
};
exports.getScalarAttributes = getScalarAttributes;
/**
 * Checks if an attribute is of type `type`
 * @param {object} attribute
 * @param {string} type
 */
const isTypedAttribute = (attribute, type) => {
    return lodash_1.default.has(attribute, 'type') && attribute.type === type;
};
exports.isTypedAttribute = isTypedAttribute;
/**
 *  Returns a route prefix for a contentType
 * @param {object} contentType
 * @returns {string}
 */
const getContentTypeRoutePrefix = (contentType) => {
    return isSingleType(contentType)
        ? lodash_1.default.kebabCase(contentType.info.singularName)
        : lodash_1.default.kebabCase(contentType.info.pluralName);
};
exports.getContentTypeRoutePrefix = getContentTypeRoutePrefix;
//# sourceMappingURL=content-types.js.map