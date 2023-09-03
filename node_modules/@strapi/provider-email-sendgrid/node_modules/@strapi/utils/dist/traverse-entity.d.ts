/// <reference types="lodash" />
import type { Attribute, Model } from './types';
export type VisitorUtils = ReturnType<typeof createVisitorUtils>;
export interface VisitorOptions {
    data: Record<string, unknown>;
    schema: Model;
    key: string;
    value: Data | Data[];
    attribute: Attribute;
    path: Path;
}
export type Visitor = (visitorOptions: VisitorOptions, visitorUtils: VisitorUtils) => void;
export interface Data {
    [key: string]: Data | Data[];
}
export interface Path {
    raw: string | null;
    attribute: string | null;
}
export interface TraverseOptions {
    path?: Path;
    schema: Model;
}
declare const createVisitorUtils: ({ data }: {
    data: Data;
}) => {
    remove(key: string): void;
    set(key: string, value: Data): void;
};
declare const _default: import("lodash").CurriedFunction3<Visitor, TraverseOptions, Data, Promise<Data>>;
export default _default;
