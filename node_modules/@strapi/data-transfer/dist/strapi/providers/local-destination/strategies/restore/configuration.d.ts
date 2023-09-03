/// <reference types="node" />
import { Writable } from 'stream';
import { IConfiguration, Transaction } from '../../../../../../types';
export declare const restoreConfigs: (strapi: Strapi.Strapi, config: IConfiguration) => Promise<any>;
export declare const createConfigurationWriteStream: (strapi: Strapi.Strapi, transaction?: Transaction) => Promise<Writable>;
