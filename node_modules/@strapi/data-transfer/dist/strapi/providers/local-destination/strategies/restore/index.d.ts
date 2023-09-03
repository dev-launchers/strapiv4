import type { Schema } from '@strapi/strapi';
export interface IRestoreOptions {
    assets?: boolean;
    configuration?: {
        webhook?: boolean;
        coreStore?: boolean;
    };
    entities?: {
        include?: string[];
        exclude?: string[];
        filters?: ((contentType: Schema.ContentType) => boolean)[];
        params?: {
            [uid: string]: unknown;
        };
    };
}
interface IDeleteResults {
    count: number;
    aggregate: {
        [uid: string]: {
            count: number;
        };
    };
}
export declare const deleteRecords: (strapi: Strapi.Strapi, options?: IRestoreOptions) => Promise<{
    count: number;
    entities: IDeleteResults;
    configuration: IDeleteResults;
}>;
export * from './entities';
export * from './configuration';
export * from './links';
