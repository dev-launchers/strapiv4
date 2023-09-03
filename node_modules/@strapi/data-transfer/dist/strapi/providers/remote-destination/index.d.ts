/// <reference types="node" />
import { WebSocket } from 'ws';
import { Writable } from 'stream';
import type { Schema, Utils } from '@strapi/strapi';
import { createDispatcher } from '../utils';
import type { IDestinationProvider, IMetadata, ProviderType } from '../../../../types';
import type { Auth } from '../../../../types/remote/protocol';
import type { ILocalStrapiDestinationProviderOptions } from '../local-destination';
export interface IRemoteStrapiDestinationProviderOptions extends Pick<ILocalStrapiDestinationProviderOptions, 'restore' | 'strategy'> {
    url: URL;
    auth?: Auth.ITransferTokenAuth;
    retryMessageOptions?: {
        retryMessageTimeout: number;
        retryMessageMaxRetries: number;
    };
}
declare class RemoteStrapiDestinationProvider implements IDestinationProvider {
    #private;
    name: string;
    type: ProviderType;
    options: IRemoteStrapiDestinationProviderOptions;
    ws: WebSocket | null;
    dispatcher: ReturnType<typeof createDispatcher> | null;
    transferID: string | null;
    constructor(options: IRemoteStrapiDestinationProviderOptions);
    initTransfer(): Promise<string>;
    bootstrap(): Promise<void>;
    close(): Promise<void>;
    getMetadata(): Promise<IMetadata | null> | null;
    beforeTransfer(): Promise<void>;
    rollback(): Promise<void>;
    getSchemas(): Promise<Utils.String.Dict<Schema.Schema> | null>;
    createEntitiesWriteStream(): Writable;
    createLinksWriteStream(): Writable;
    createConfigurationWriteStream(): Writable;
    createAssetsWriteStream(): Writable | Promise<Writable>;
}
export declare const createRemoteStrapiDestinationProvider: (options: IRemoteStrapiDestinationProviderOptions) => RemoteStrapiDestinationProvider;
export {};
