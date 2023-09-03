/// <reference types="lodash" />
import { Data } from '../traverse-entity';
import type { Model } from '../types';
declare const sanitizePasswords: (schema: Model) => (entity: Data) => Promise<Data>;
declare const defaultSanitizeOutput: (schema: Model, entity: Data) => Promise<Data>;
declare const defaultSanitizeFilters: import("lodash").CurriedFunction2<Model, unknown, Promise<unknown>>;
declare const defaultSanitizeSort: import("lodash").CurriedFunction2<Model, unknown, Promise<unknown>>;
declare const defaultSanitizeFields: import("lodash").CurriedFunction2<Model, unknown, Promise<any>>;
declare const defaultSanitizePopulate: import("lodash").CurriedFunction2<Model, unknown, Promise<unknown>>;
export { sanitizePasswords, defaultSanitizeOutput, defaultSanitizeFilters, defaultSanitizeSort, defaultSanitizeFields, defaultSanitizePopulate, };
