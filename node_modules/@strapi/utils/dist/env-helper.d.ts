declare function envFn<T>(key: string, defaultValue?: T): string | T | undefined;
declare const env: typeof envFn & {
    int(key: string, defaultValue?: number): number | undefined;
    float(key: string, defaultValue?: number): number | undefined;
    bool(key: string, defaultValue?: boolean): boolean | undefined;
    json(key: string, defaultValue?: object): any;
    array(key: string, defaultValue?: string[]): string[] | undefined;
    date(key: string, defaultValue?: Date): Date | undefined;
    /**
     * Gets a value from env that matches oneOf provided values
     * @param {string} key
     * @param {string[]} expectedValues
     * @param {string|undefined} defaultValue
     * @returns {string|undefined}
     */
    oneOf(key: string, expectedValues?: unknown[], defaultValue?: unknown): unknown;
};
export default env;
