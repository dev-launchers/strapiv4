import { Duplex } from 'stream';
/**
 * Generate and consume assets streams in order to stream each file individually
 */
export declare const createAssetsStream: (strapi: Strapi.Strapi) => Duplex;
