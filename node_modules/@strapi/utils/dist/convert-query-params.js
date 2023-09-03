"use strict";
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-classes-per-file */
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
/**
 * Converts the standard Strapi REST query params to a more usable format for querying
 * You can read more here: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#filters
 */
const fp_1 = require("lodash/fp");
const lodash_1 = __importDefault(require("lodash"));
const parse_type_1 = __importDefault(require("./parse-type"));
const contentTypesUtils = __importStar(require("./content-types"));
const errors_1 = require("./errors");
const content_types_1 = require("./content-types");
const operators_1 = require("./operators");
const { PUBLISHED_AT_ATTRIBUTE } = contentTypesUtils.constants;
class InvalidOrderError extends Error {
    constructor() {
        super();
        this.message = 'Invalid order. order can only be one of asc|desc|ASC|DESC';
    }
}
class InvalidSortError extends Error {
    constructor() {
        super();
        this.message =
            'Invalid sort parameter. Expected a string, an array of strings, a sort object or an array of sort objects';
    }
}
function validateOrder(order) {
    if (!(0, fp_1.isString)(order) || !['asc', 'desc'].includes(order.toLocaleLowerCase())) {
        throw new InvalidOrderError();
    }
}
const convertCountQueryParams = (countQuery) => {
    return (0, parse_type_1.default)({ type: 'boolean', value: countQuery });
};
const convertOrderingQueryParams = (ordering) => {
    return ordering;
};
const isPlainObject = (value) => lodash_1.default.isPlainObject(value);
const isStringArray = (value) => (0, fp_1.isArray)(value) && value.every(fp_1.isString);
/**
 * Sort query parser
 */
const convertSortQueryParams = (sortQuery) => {
    if (typeof sortQuery === 'string') {
        return convertStringSortQueryParam(sortQuery);
    }
    if (isStringArray(sortQuery)) {
        return sortQuery.flatMap((sortValue) => convertStringSortQueryParam(sortValue));
    }
    if (Array.isArray(sortQuery)) {
        return sortQuery.map((sortValue) => convertNestedSortQueryParam(sortValue));
    }
    if (isPlainObject(sortQuery)) {
        return convertNestedSortQueryParam(sortQuery);
    }
    throw new InvalidSortError();
};
const convertStringSortQueryParam = (sortQuery) => {
    return sortQuery.split(',').map((value) => convertSingleSortQueryParam(value));
};
const convertSingleSortQueryParam = (sortQuery) => {
    if (!sortQuery) {
        return {};
    }
    if (!(0, fp_1.isString)(sortQuery)) {
        throw new Error('Invalid sort query');
    }
    // split field and order param with default order to ascending
    const [field, order = 'asc'] = sortQuery.split(':');
    if (field.length === 0) {
        throw new Error('Field cannot be empty');
    }
    validateOrder(order);
    // TODO: field should be a valid path on an object model
    return lodash_1.default.set({}, field, order);
};
const convertNestedSortQueryParam = (sortQuery) => {
    const transformedSort = {};
    for (const field of Object.keys(sortQuery)) {
        const order = sortQuery[field];
        // this is a deep sort
        if (isPlainObject(order)) {
            transformedSort[field] = convertNestedSortQueryParam(order);
        }
        else if (typeof order === 'string') {
            validateOrder(order);
            transformedSort[field] = order;
        }
        else {
            throw Error(`Invalid sort type expected object or string got ${typeof order}`);
        }
    }
    return transformedSort;
};
/**
 * Start query parser
 */
const convertStartQueryParams = (startQuery) => {
    const startAsANumber = lodash_1.default.toNumber(startQuery);
    if (!lodash_1.default.isInteger(startAsANumber) || startAsANumber < 0) {
        throw new Error(`convertStartQueryParams expected a positive integer got ${startAsANumber}`);
    }
    return startAsANumber;
};
/**
 * Limit query parser
 */
const convertLimitQueryParams = (limitQuery) => {
    const limitAsANumber = lodash_1.default.toNumber(limitQuery);
    if (!lodash_1.default.isInteger(limitAsANumber) || (limitAsANumber !== -1 && limitAsANumber < 0)) {
        throw new Error(`convertLimitQueryParams expected a positive integer got ${limitAsANumber}`);
    }
    if (limitAsANumber === -1) {
        return undefined;
    }
    return limitAsANumber;
};
const convertPageQueryParams = (page) => {
    const pageVal = (0, fp_1.toNumber)(page);
    if (!(0, fp_1.isInteger)(pageVal) || pageVal <= 0) {
        throw new errors_1.PaginationError(`Invalid 'page' parameter. Expected an integer > 0, received: ${page}`);
    }
    return pageVal;
};
const convertPageSizeQueryParams = (pageSize, page) => {
    const pageSizeVal = (0, fp_1.toNumber)(pageSize);
    if (!(0, fp_1.isInteger)(pageSizeVal) || pageSizeVal <= 0) {
        throw new errors_1.PaginationError(`Invalid 'pageSize' parameter. Expected an integer > 0, received: ${page}`);
    }
    return pageSizeVal;
};
const validatePaginationParams = (page, pageSize, start, limit) => {
    const isPagePagination = !(0, fp_1.isNil)(page) || !(0, fp_1.isNil)(pageSize);
    const isOffsetPagination = !(0, fp_1.isNil)(start) || !(0, fp_1.isNil)(limit);
    if (isPagePagination && isOffsetPagination) {
        throw new errors_1.PaginationError('Invalid pagination attributes. You cannot use page and offset pagination in the same query');
    }
};
class InvalidPopulateError extends Error {
    constructor() {
        super();
        this.message =
            'Invalid populate parameter. Expected a string, an array of strings, a populate object';
    }
}
// NOTE: we could support foo.* or foo.bar.* etc later on
const convertPopulateQueryParams = (populate, schema, depth = 0) => {
    if (depth === 0 && populate === '*') {
        return true;
    }
    if (typeof populate === 'string') {
        return populate.split(',').map((value) => lodash_1.default.trim(value));
    }
    if (Array.isArray(populate)) {
        // map convert
        return lodash_1.default.uniq(populate.flatMap((value) => {
            if (typeof value !== 'string') {
                throw new InvalidPopulateError();
            }
            return value.split(',').map((value) => lodash_1.default.trim(value));
        }));
    }
    if (lodash_1.default.isPlainObject(populate)) {
        return convertPopulateObject(populate, schema);
    }
    throw new InvalidPopulateError();
};
const convertPopulateObject = (populate, schema) => {
    if (!schema) {
        return {};
    }
    const { attributes } = schema;
    return Object.entries(populate).reduce((acc, [key, subPopulate]) => {
        const attribute = attributes[key];
        if (!attribute) {
            return acc;
        }
        // Allow adding an 'on' strategy to populate queries for polymorphic relations, media and dynamic zones
        const isAllowedAttributeForFragmentPopulate = (0, content_types_1.isDynamicZoneAttribute)(attribute) ||
            (0, content_types_1.isMediaAttribute)(attribute) ||
            (0, content_types_1.isMorphToRelationalAttribute)(attribute);
        const hasFragmentPopulateDefined = typeof subPopulate === 'object' && 'on' in subPopulate && !(0, fp_1.isNil)(subPopulate.on);
        if (isAllowedAttributeForFragmentPopulate && hasFragmentPopulateDefined) {
            return {
                ...acc,
                [key]: {
                    on: Object.entries(subPopulate.on).reduce((acc, [type, typeSubPopulate]) => ({
                        ...acc,
                        [type]: convertNestedPopulate(typeSubPopulate, strapi.getModel(type)),
                    }), {}),
                },
            };
        }
        // TODO: This is a query's populate fallback for DynamicZone and is kept for legacy purpose.
        //       Removing it could break existing user queries but it should be removed in V5.
        if ((0, content_types_1.isDynamicZoneAttribute)(attribute)) {
            const populates = attribute.components
                .map((uid) => strapi.getModel(uid))
                .map((schema) => convertNestedPopulate(subPopulate, schema))
                .map((populate) => (populate === true ? {} : populate)) // cast boolean to empty object to avoid merging issues
                .filter((populate) => populate !== false);
            if ((0, fp_1.isEmpty)(populates)) {
                return acc;
            }
            return {
                ...acc,
                [key]: (0, fp_1.mergeAll)(populates),
            };
        }
        // NOTE: Retrieve the target schema UID.
        // Only handles basic relations, medias and component since it's not possible
        // to populate with options for a dynamic zone or a polymorphic relation
        let targetSchemaUID;
        if (attribute.type === 'relation') {
            targetSchemaUID = attribute.target;
        }
        else if (attribute.type === 'component') {
            targetSchemaUID = attribute.component;
        }
        else if (attribute.type === 'media') {
            targetSchemaUID = 'plugin::upload.file';
        }
        else {
            return acc;
        }
        const targetSchema = strapi.getModel(targetSchemaUID);
        if (!targetSchema) {
            return acc;
        }
        const populateObject = convertNestedPopulate(subPopulate, targetSchema);
        if (!populateObject) {
            return acc;
        }
        return {
            ...acc,
            [key]: populateObject,
        };
    }, {});
};
const convertNestedPopulate = (subPopulate, schema) => {
    if (lodash_1.default.isString(subPopulate)) {
        return (0, parse_type_1.default)({ type: 'boolean', value: subPopulate, forceCast: true });
    }
    if (lodash_1.default.isBoolean(subPopulate)) {
        return subPopulate;
    }
    if (!isPlainObject(subPopulate)) {
        throw new Error(`Invalid nested populate. Expected '*' or an object`);
    }
    const { sort, filters, fields, populate, count, ordering, page, pageSize, start, limit } = subPopulate;
    const query = {};
    if (sort) {
        query.orderBy = convertSortQueryParams(sort);
    }
    if (filters) {
        query.where = convertFiltersQueryParams(filters, schema);
    }
    if (fields) {
        query.select = convertFieldsQueryParams(fields);
    }
    if (populate) {
        query.populate = convertPopulateQueryParams(populate, schema);
    }
    if (count) {
        query.count = convertCountQueryParams(count);
    }
    if (ordering) {
        query.ordering = convertOrderingQueryParams(ordering);
    }
    validatePaginationParams(page, pageSize, start, limit);
    if (!(0, fp_1.isNil)(page)) {
        query.page = convertPageQueryParams(page);
    }
    if (!(0, fp_1.isNil)(pageSize)) {
        query.pageSize = convertPageSizeQueryParams(pageSize, page);
    }
    if (!(0, fp_1.isNil)(start)) {
        query.offset = convertStartQueryParams(start);
    }
    if (!(0, fp_1.isNil)(limit)) {
        query.limit = convertLimitQueryParams(limit);
    }
    convertPublicationStateParams(schema, subPopulate, query);
    return query;
};
// TODO: ensure field is valid in content types (will probably have to check strapi.contentTypes since it can be a string.path)
const convertFieldsQueryParams = (fields, depth = 0) => {
    if (depth === 0 && fields === '*') {
        return undefined;
    }
    if (typeof fields === 'string') {
        const fieldsValues = fields.split(',').map((value) => lodash_1.default.trim(value));
        return lodash_1.default.uniq(['id', ...fieldsValues]);
    }
    if (isStringArray(fields)) {
        // map convert
        const fieldsValues = fields
            .flatMap((value) => convertFieldsQueryParams(value, depth + 1))
            .filter((v) => !(0, fp_1.isNil)(v));
        return lodash_1.default.uniq(['id', ...fieldsValues]);
    }
    throw new Error('Invalid fields parameter. Expected a string or an array of strings');
};
const isValidSchemaAttribute = (key, schema) => {
    if (key === 'id') {
        return true;
    }
    if (!schema) {
        return false;
    }
    return Object.keys(schema.attributes).includes(key);
};
const convertFiltersQueryParams = (filters, schema) => {
    // Filters need to be either an array or an object
    // Here we're only checking for 'object' type since typeof [] => object and typeof {} => object
    if (!(0, fp_1.isObject)(filters)) {
        throw new Error('The filters parameter must be an object or an array');
    }
    // Don't mutate the original object
    const filtersCopy = (0, fp_1.cloneDeep)(filters);
    return convertAndSanitizeFilters(filtersCopy, schema);
};
const convertAndSanitizeFilters = (filters, schema) => {
    if (Array.isArray(filters)) {
        return (filters
            // Sanitize each filter
            .map((filter) => convertAndSanitizeFilters(filter, schema))
            // Filter out empty filters
            .filter((filter) => !isPlainObject(filter) || !(0, fp_1.isEmpty)(filter)));
    }
    if (!isPlainObject(filters)) {
        return filters;
    }
    const removeOperator = (operator) => delete filters[operator];
    // Here, `key` can either be an operator or an attribute name
    for (const [key, value] of Object.entries(filters)) {
        const attribute = (0, fp_1.get)(key, schema?.attributes);
        const validKey = (0, operators_1.isOperator)(key) || isValidSchemaAttribute(key, schema);
        if (!validKey) {
            removeOperator(key);
        }
        // Handle attributes
        else if (attribute) {
            // Relations
            if (attribute.type === 'relation') {
                filters[key] = convertAndSanitizeFilters(value, strapi.getModel(attribute.target));
            }
            // Components
            else if (attribute.type === 'component') {
                filters[key] = convertAndSanitizeFilters(value, strapi.getModel(attribute.component));
            }
            // Media
            else if (attribute.type === 'media') {
                filters[key] = convertAndSanitizeFilters(value, strapi.getModel('plugin::upload.file'));
            }
            // Dynamic Zones
            else if (attribute.type === 'dynamiczone') {
                removeOperator(key);
            }
            // Password attributes
            else if (attribute.type === 'password') {
                // Always remove password attributes from filters object
                removeOperator(key);
            }
            // Scalar attributes
            else {
                filters[key] = convertAndSanitizeFilters(value, schema);
            }
        }
        // Handle operators
        else if (['$null', '$notNull'].includes(key)) {
            filters[key] = (0, parse_type_1.default)({ type: 'boolean', value: filters[key], forceCast: true });
        }
        else if ((0, fp_1.isObject)(value)) {
            filters[key] = convertAndSanitizeFilters(value, schema);
        }
        // Remove empty objects & arrays
        if (isPlainObject(filters[key]) && (0, fp_1.isEmpty)(filters[key])) {
            removeOperator(key);
        }
    }
    return filters;
};
const convertPublicationStateParams = (schema, params = {}, query = {}) => {
    if (!schema) {
        return;
    }
    const { publicationState } = params;
    if (!lodash_1.default.isNil(publicationState)) {
        if (!contentTypesUtils.constants.DP_PUB_STATES.includes(publicationState)) {
            throw new Error(`Invalid publicationState. Expected one of 'preview','live' received: ${publicationState}.`);
        }
        // NOTE: this is the query layer filters not the entity service filters
        query.filters = ({ meta }) => {
            if (publicationState === 'live' && (0, fp_1.has)(PUBLISHED_AT_ATTRIBUTE, meta.attributes)) {
                return { [PUBLISHED_AT_ATTRIBUTE]: { $notNull: true } };
            }
        };
    }
};
const transformParamsToQuery = (uid, params) => {
    // NOTE: can be a CT, a Compo or nothing in the case of polymorphism (DZ & morph relations)
    const schema = strapi.getModel(uid);
    const query = {};
    const { _q, sort, filters, fields, populate, page, pageSize, start, limit } = params;
    if (!(0, fp_1.isNil)(_q)) {
        query._q = _q;
    }
    if (!(0, fp_1.isNil)(sort)) {
        query.orderBy = convertSortQueryParams(sort);
    }
    if (!(0, fp_1.isNil)(filters)) {
        query.where = convertFiltersQueryParams(filters, schema);
    }
    if (!(0, fp_1.isNil)(fields)) {
        query.select = convertFieldsQueryParams(fields);
    }
    if (!(0, fp_1.isNil)(populate)) {
        query.populate = convertPopulateQueryParams(populate, schema);
    }
    validatePaginationParams(page, pageSize, start, limit);
    if (!(0, fp_1.isNil)(page)) {
        query.page = convertPageQueryParams(page);
    }
    if (!(0, fp_1.isNil)(pageSize)) {
        query.pageSize = convertPageSizeQueryParams(pageSize, page);
    }
    if (!(0, fp_1.isNil)(start)) {
        query.offset = convertStartQueryParams(start);
    }
    if (!(0, fp_1.isNil)(limit)) {
        query.limit = convertLimitQueryParams(limit);
    }
    convertPublicationStateParams(schema, params, query);
    return query;
};
exports.default = {
    convertSortQueryParams,
    convertStartQueryParams,
    convertLimitQueryParams,
    convertPopulateQueryParams,
    convertFiltersQueryParams,
    convertFieldsQueryParams,
    convertPublicationStateParams,
    transformParamsToQuery,
};
//# sourceMappingURL=convert-query-params.js.map