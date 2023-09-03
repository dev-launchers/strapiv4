import { Readable, PassThrough } from 'stream';
/**
 * Generate and consume content-types streams in order to stream each entity individually
 */
export declare const createEntitiesStream: (strapi: Strapi.Strapi) => Readable;
/**
 * Create an entity transform stream which convert the output of
 * the multi-content-types stream to the transfer entity format
 */
export declare const createEntitiesTransformStream: () => PassThrough;
