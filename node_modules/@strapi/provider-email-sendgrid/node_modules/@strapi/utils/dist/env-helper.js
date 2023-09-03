"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
function envFn(key, defaultValue) {
    return lodash_1.default.has(process.env, key) ? process.env[key] : defaultValue;
}
function getKey(key) {
    return process.env[key] ?? '';
}
const utils = {
    int(key, defaultValue) {
        if (!lodash_1.default.has(process.env, key)) {
            return defaultValue;
        }
        return parseInt(getKey(key), 10);
    },
    float(key, defaultValue) {
        if (!lodash_1.default.has(process.env, key)) {
            return defaultValue;
        }
        return parseFloat(getKey(key));
    },
    bool(key, defaultValue) {
        if (!lodash_1.default.has(process.env, key)) {
            return defaultValue;
        }
        return getKey(key) === 'true';
    },
    json(key, defaultValue) {
        if (!lodash_1.default.has(process.env, key)) {
            return defaultValue;
        }
        try {
            return JSON.parse(getKey(key));
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Invalid json environment variable ${key}: ${error.message}`);
            }
            throw error;
        }
    },
    array(key, defaultValue) {
        if (!lodash_1.default.has(process.env, key)) {
            return defaultValue;
        }
        let value = getKey(key);
        if (value.startsWith('[') && value.endsWith(']')) {
            value = value.substring(1, value.length - 1);
        }
        return value.split(',').map((v) => {
            return lodash_1.default.trim(lodash_1.default.trim(v, ' '), '"');
        });
    },
    date(key, defaultValue) {
        if (!lodash_1.default.has(process.env, key)) {
            return defaultValue;
        }
        return new Date(getKey(key));
    },
    /**
     * Gets a value from env that matches oneOf provided values
     * @param {string} key
     * @param {string[]} expectedValues
     * @param {string|undefined} defaultValue
     * @returns {string|undefined}
     */
    oneOf(key, expectedValues, defaultValue) {
        if (!expectedValues) {
            throw new Error(`env.oneOf requires expectedValues`);
        }
        if (defaultValue && !expectedValues.includes(defaultValue)) {
            throw new Error(`env.oneOf requires defaultValue to be included in expectedValues`);
        }
        const rawValue = env(key, defaultValue);
        return expectedValues.includes(rawValue) ? rawValue : defaultValue;
    },
};
const env = Object.assign(envFn, utils);
exports.default = env;
//# sourceMappingURL=env-helper.js.map