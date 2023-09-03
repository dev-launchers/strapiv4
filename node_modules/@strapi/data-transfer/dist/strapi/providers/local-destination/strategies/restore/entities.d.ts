/// <reference types="node" />
import type { Common } from '@strapi/strapi';
import { Writable } from 'stream';
import type { Transaction } from '../../../../../../types';
interface IEntitiesRestoreStreamOptions {
    strapi: Strapi.Strapi;
    updateMappingTable<TSchemaUID extends Common.UID.Schema>(type: TSchemaUID, oldID: number, newID: number): void;
    transaction?: Transaction;
}
declare const createEntitiesWriteStream: (options: IEntitiesRestoreStreamOptions) => Writable;
export { createEntitiesWriteStream };
