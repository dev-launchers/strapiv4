import { Readable } from 'stream';
/**
 * Create a readable stream that export the Strapi app configuration
 */
export declare const createConfigurationStream: (strapi: Strapi.Strapi) => Readable;
