"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSchemasValues = void 0;
const fp_1 = require("lodash/fp");
/**
 * List of schema properties that should be kept when sanitizing schemas
 */
const VALID_SCHEMA_PROPERTIES = [
    'collectionName',
    'info',
    'options',
    'pluginOptions',
    'attributes',
    'kind',
    'modelType',
    'modelName',
    'uid',
    'plugin',
    'globalId',
];
/**
 * Sanitize a schemas dictionary by omitting unwanted properties
 * The list of allowed properties can be found here: {@link VALID_SCHEMA_PROPERTIES}
 */
const mapSchemasValues = (schemas) => {
    return (0, fp_1.mapValues)((0, fp_1.pick)(VALID_SCHEMA_PROPERTIES), schemas);
};
exports.mapSchemasValues = mapSchemasValues;
//# sourceMappingURL=schema.js.map