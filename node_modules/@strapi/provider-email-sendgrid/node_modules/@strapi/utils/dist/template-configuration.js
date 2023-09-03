"use strict";
const lodash_1 = require("lodash");
const regex = /\$\{[^()]*\}/g;
const excludeConfigPaths = ['info.scripts'];
const isObj = (value) => (0, lodash_1.isPlainObject)(value);
/**
 * Allow dynamic config values through the native ES6 template string function.
 */
const templateConfiguration = (obj, configPath = '') => {
    // Allow values which looks like such as an ES6 literal string without parenthesis inside (aka function call).
    // Exclude config with conflicting syntax (e.g. npm scripts).
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        if (isObj(value) && !(0, lodash_1.isString)(value)) {
            acc[key] = templateConfiguration(value, `${configPath}.${key}`);
        }
        else if ((0, lodash_1.isString)(value) &&
            !excludeConfigPaths.includes(configPath.substr(1)) &&
            value.match(regex) !== null) {
            // eslint-disable-next-line prefer-template, no-eval
            acc[key] = eval('`' + value + '`');
        }
        else {
            acc[key] = value;
        }
        return acc;
    }, {});
};
module.exports = templateConfiguration;
//# sourceMappingURL=template-configuration.js.map