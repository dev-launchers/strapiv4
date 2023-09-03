"use strict";
/**
 * Policies util
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPolicyContext = exports.createPolicy = exports.globalPolicy = exports.resolve = exports.get = void 0;
const lodash_1 = __importDefault(require("lodash"));
const fp_1 = require("lodash/fp");
const PLUGIN_PREFIX = 'plugin::';
const API_PREFIX = 'api::';
const parsePolicy = (policy) => {
    if (typeof policy === 'string') {
        return { policyName: policy, config: {} };
    }
    const { name, config } = policy;
    return { policyName: name, config };
};
const searchLocalPolicy = (policyName, policyContext) => {
    const { pluginName, apiName } = policyContext ?? {};
    if (pluginName) {
        return strapi.policy(`${PLUGIN_PREFIX}${pluginName}.${policyName}`);
    }
    if (apiName) {
        return strapi.policy(`${API_PREFIX}${apiName}.${policyName}`);
    }
};
const globalPolicy = ({ method, endpoint, controller, action, plugin }) => {
    return async (ctx, next) => {
        ctx.request.route = {
            endpoint: `${method} ${endpoint}`,
            controller: lodash_1.default.toLower(controller),
            action: lodash_1.default.toLower(action),
            verb: lodash_1.default.toLower(method),
            plugin,
        };
        await next();
    };
};
exports.globalPolicy = globalPolicy;
const resolvePolicies = (config, policyContext) => {
    const { pluginName, apiName } = policyContext ?? {};
    return config.map((policyConfig) => {
        return {
            handler: getPolicy(policyConfig, { pluginName, apiName }),
            config: policyConfig.config || {},
        };
    });
};
exports.resolve = resolvePolicies;
const findPolicy = (name, policyContext) => {
    const { pluginName, apiName } = policyContext ?? {};
    const resolvedPolicy = strapi.policy(name);
    if (resolvedPolicy !== undefined) {
        return resolvedPolicy;
    }
    const localPolicy = searchLocalPolicy(name, { pluginName, apiName });
    if (localPolicy !== undefined) {
        return localPolicy;
    }
    throw new Error(`Could not find policy "${name}"`);
};
const getPolicy = (policyConfig, policyContext) => {
    const { pluginName, apiName } = policyContext ?? {};
    if (typeof policyConfig === 'function') {
        return policyConfig;
    }
    const { policyName, config } = parsePolicy(policyConfig);
    const policy = findPolicy(policyName, { pluginName, apiName });
    if (typeof policy === 'function') {
        return policy;
    }
    if (policy.validator) {
        policy.validator(config);
    }
    return policy.handler;
};
exports.get = getPolicy;
const createPolicy = (options) => {
    const { name = 'unnamed', validator, handler } = options;
    const wrappedValidator = (config) => {
        if (validator) {
            try {
                validator(config);
            }
            catch (e) {
                throw new Error(`Invalid config passed to "${name}" policy.`);
            }
        }
    };
    return {
        name,
        validator: wrappedValidator,
        handler,
    };
};
exports.createPolicy = createPolicy;
const createPolicyContext = (type, ctx) => {
    return Object.assign({
        is: (0, fp_1.eq)(type),
        get type() {
            return type;
        },
    }, ctx);
};
exports.createPolicyContext = createPolicyContext;
//# sourceMappingURL=policy.js.map