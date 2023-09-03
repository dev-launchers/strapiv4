import type { Knex } from 'knex';
import { ILink } from '../../../types';
export declare const createLinkQuery: (strapi: Strapi.Strapi, trx?: Knex.Transaction) => () => {
    generateAll: (uid: string) => AsyncGenerator<ILink>;
    generateAllForAttribute: (uid: string, fieldName: string) => AsyncGenerator<ILink>;
    insert: (link: ILink) => Promise<void>;
};
