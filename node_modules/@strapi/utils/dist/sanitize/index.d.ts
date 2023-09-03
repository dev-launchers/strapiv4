import * as visitors from './visitors';
import * as sanitizers from './sanitizers';
import { Model } from '../types';
export interface Options {
    auth?: unknown;
}
export interface SanitizeFunc {
    (data: unknown, schema: Model, options?: Options): Promise<unknown>;
}
declare const _default: {
    contentAPI: {
        input: SanitizeFunc;
        output: SanitizeFunc;
        query: (query: Record<string, unknown>, schema: Model, { auth }?: Options) => Promise<Record<string, unknown>>;
        filters: SanitizeFunc;
        sort: SanitizeFunc;
        fields: SanitizeFunc;
        populate: SanitizeFunc;
    };
    sanitizers: typeof sanitizers;
    visitors: typeof visitors;
};
export default _default;
