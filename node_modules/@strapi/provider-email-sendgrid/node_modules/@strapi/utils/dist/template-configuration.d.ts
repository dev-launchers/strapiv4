/**
 * Allow dynamic config values through the native ES6 template string function.
 */
declare const templateConfiguration: (obj: Record<string, unknown>, configPath?: string) => Record<string, unknown>;
export = templateConfiguration;
