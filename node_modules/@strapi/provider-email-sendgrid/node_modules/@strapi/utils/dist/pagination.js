"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withDefaultPagination = void 0;
const fp_1 = require("lodash/fp");
const errors_1 = require("./errors");
const STRAPI_DEFAULTS = {
    offset: {
        start: 0,
        limit: 10,
    },
    page: {
        page: 1,
        pageSize: 10,
    },
};
const paginationAttributes = ['start', 'limit', 'page', 'pageSize'];
const withMaxLimit = (limit, maxLimit = -1) => {
    if (maxLimit === -1 || limit < maxLimit) {
        return limit;
    }
    return maxLimit;
};
// Ensure minimum page & pageSize values (page >= 1, pageSize >= 0, start >= 0, limit >= 0)
const ensureMinValues = ({ start, limit }) => ({
    start: Math.max(start, 0),
    limit: limit === -1 ? limit : Math.max(limit, 1),
});
const ensureMaxValues = (maxLimit = -1) => ({ start, limit }) => ({
    start,
    limit: withMaxLimit(limit, maxLimit),
});
// Apply maxLimit as the limit when limit is -1
const withNoLimit = (pagination, maxLimit = -1) => ({
    ...pagination,
    limit: pagination.limit === -1 ? maxLimit : pagination.limit,
});
const withDefaultPagination = (args, { defaults = {}, maxLimit = -1 } = {}) => {
    const defaultValues = (0, fp_1.merge)(STRAPI_DEFAULTS, defaults);
    const usePagePagination = !(0, fp_1.isNil)(args.page) || !(0, fp_1.isNil)(args.pageSize);
    const useOffsetPagination = !(0, fp_1.isNil)(args.start) || !(0, fp_1.isNil)(args.limit);
    const ensureValidValues = (0, fp_1.pipe)(ensureMinValues, ensureMaxValues(maxLimit));
    // If there is no pagination attribute, don't modify the payload
    if (!usePagePagination && !useOffsetPagination) {
        return (0, fp_1.merge)(args, ensureValidValues(defaultValues.offset));
    }
    // If there is page & offset pagination attributes, throw an error
    if (usePagePagination && useOffsetPagination) {
        throw new errors_1.PaginationError('Cannot use both page & offset pagination in the same query');
    }
    const pagination = {
        start: 0,
        limit: 0,
    };
    // Start / Limit
    if (useOffsetPagination) {
        const { start, limit } = (0, fp_1.merge)(defaultValues.offset, args);
        Object.assign(pagination, { start, limit });
    }
    // Page / PageSize
    if (usePagePagination) {
        const { page, pageSize } = (0, fp_1.merge)(defaultValues.page, {
            ...args,
            pageSize: Math.max(1, args.pageSize ?? 0),
        });
        Object.assign(pagination, {
            start: (page - 1) * pageSize,
            limit: pageSize,
        });
    }
    // Handle -1 limit
    Object.assign(pagination, withNoLimit(pagination, maxLimit));
    const replacePaginationAttributes = (0, fp_1.pipe)(
    // Remove pagination attributes
    (0, fp_1.omit)(paginationAttributes), 
    // Merge the object with the new pagination + ensure minimum & maximum values
    (0, fp_1.merge)(ensureValidValues(pagination)));
    return replacePaginationAttributes(args);
};
exports.withDefaultPagination = withDefaultPagination;
//# sourceMappingURL=pagination.js.map