import type { Attribute, Model } from './types';
declare const getRelationalFields: (contentType: Model) => string[];
declare const isOneToAny: (attribute: Attribute) => boolean;
declare const isManyToAny: (attribute: Attribute) => boolean;
declare const isAnyToOne: (attribute: Attribute) => boolean;
declare const isAnyToMany: (attribute: Attribute) => boolean;
export declare const constants: {
    MANY_RELATIONS: string[];
};
export { getRelationalFields, isOneToAny, isManyToAny, isAnyToOne, isAnyToMany };
