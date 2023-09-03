/// <reference types="node" />
import type { Schema, Utils } from '@strapi/strapi';
import { Readable, Writable } from 'stream';
import { WebSocket } from 'ws';
import type { IMetadata, ISourceProvider, ISourceProviderTransferResults, MaybePromise, ProviderType } from '../../../../types';
import { Auth } from '../../../../types/remote/protocol';
import { ILocalStrapiSourceProviderOptions } from '../local-source';
import { createDispatcher } from '../utils';
export interface IRemoteStrapiSourceProviderOptions extends ILocalStrapiSourceProviderOptions {
    url: URL;
    auth?: Auth.ITransferTokenAuth;
    retryMessageOptions?: {
        retryMessageTimeout: number;
        retryMessageMaxRetries: number;
    };
}
declare class RemoteStrapiSourceProvider implements ISourceProvider {
    #private;
    name: string;
    type: ProviderType;
    options: IRemoteStrapiSourceProviderOptions;
    ws: WebSocket | null;
    dispatcher: ReturnType<typeof createDispatcher> | null;
    constructor(options: IRemoteStrapiSourceProviderOptions);
    results?: ISourceProviderTransferResults | undefined;
    createEntitiesReadStream(): MaybePromise<Readable>;
    createLinksReadStream(): MaybePromise<Readable>;
    writeAsync: <T>(stream: Writable, data: T) => Promise<void>;
    createAssetsReadStream(): Promise<Readable>;
    createConfigurationReadStream(): MaybePromise<Readable>;
    getMetadata(): Promise<IMetadata | null>;
    assertValidProtocol(url: URL): void;
    initTransfer(): Promise<string>;
    bootstrap(): Promise<void>;
    close(): Promise<void>;
    getSchemas(): Promise<Utils.String.Dict<Schema.Schema> | null>;
}
export declare const createRemoteStrapiSourceProvider: (options: IRemoteStrapiSourceProviderOptions) => RemoteStrapiSourceProvider;
export {};
