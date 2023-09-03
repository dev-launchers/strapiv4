import type { Schema, Utils } from '@strapi/strapi';
/**
 * Sanitize a schemas dictionary by omitting unwanted properties
 * The list of allowed properties can be found here: {@link VALID_SCHEMA_PROPERTIES}
 */
export declare const mapSchemasValues: (schemas: Utils.String.Dict<Schema.Schema>) => Utils.String.Dict<Schema.Schema>;
