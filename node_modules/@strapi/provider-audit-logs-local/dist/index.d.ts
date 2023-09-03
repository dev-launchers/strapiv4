import type { Strapi } from '@strapi/strapi';
interface Event {
    action: string;
    date: Date;
    userId: string | number;
    payload: Record<string, unknown>;
}
declare const _default: {
    register({ strapi }: {
        strapi: Strapi;
    }): Promise<{
        saveEvent(event: Event): Promise<any>;
        findMany(query: Record<string, unknown>): any;
        findOne(id: string | number): any;
        deleteExpiredEvents(expirationDate: Date): any;
    }>;
};
export = _default;
