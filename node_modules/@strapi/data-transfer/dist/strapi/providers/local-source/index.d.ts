/// <reference types="node" />
import { Readable } from 'stream';
import type { IMetadata, ISourceProvider, ProviderType } from '../../../../types';
export interface ILocalStrapiSourceProviderOptions {
    getStrapi(): Strapi.Strapi | Promise<Strapi.Strapi>;
    autoDestroy?: boolean;
}
export declare const createLocalStrapiSourceProvider: (options: ILocalStrapiSourceProviderOptions) => LocalStrapiSourceProvider;
declare class LocalStrapiSourceProvider implements ISourceProvider {
    name: string;
    type: ProviderType;
    options: ILocalStrapiSourceProviderOptions;
    strapi?: Strapi.Strapi;
    constructor(options: ILocalStrapiSourceProviderOptions);
    bootstrap(): Promise<void>;
    close(): Promise<void>;
    getMetadata(): IMetadata;
    createEntitiesReadStream(): Promise<Readable>;
    createLinksReadStream(): Readable;
    createConfigurationReadStream(): Readable;
    getSchemas(): import("@strapi/strapi/lib/types/utils/string").Dict<import("@strapi/strapi/lib/types/core/schemas").Schema>;
    createSchemasReadStream(): Readable;
    createAssetsReadStream(): Readable;
}
export type ILocalStrapiSourceProvider = InstanceType<typeof LocalStrapiSourceProvider>;
export {};
