import { Readable } from 'stream';
/**
 * Create a Readable which will stream all the links from a Strapi instance
 */
export declare const createLinksStream: (strapi: Strapi.Strapi) => Readable;
