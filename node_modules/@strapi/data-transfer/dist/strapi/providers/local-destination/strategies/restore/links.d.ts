/// <reference types="node" />
import { Writable } from 'stream';
import { Transaction } from '../../../../../../types';
export declare const createLinksWriteStream: (mapID: (uid: string, id: number) => number | undefined, strapi: Strapi.Strapi, transaction?: Transaction) => Writable;
