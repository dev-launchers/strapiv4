declare const removeUndefined: <T extends object>(obj: T) => Partial<T>;
declare const keysDeep: (obj: object, path?: string[]) => string[];
export { removeUndefined, keysDeep };
