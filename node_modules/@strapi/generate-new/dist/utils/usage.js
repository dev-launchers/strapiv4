"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackUsage = exports.trackError = exports.captureStderr = exports.captureException = void 0;
const os_1 = __importDefault(require("os"));
const lodash_1 = __importDefault(require("lodash"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const node_1 = __importStar(require("@sentry/node"));
const types_1 = require("../types");
// Add properties from the package.json strapi key in the metadata
function addPackageJsonStrapiMetadata(metadata, scope) {
    const { packageJsonStrapi = {} } = scope;
    return lodash_1.default.defaults(metadata, packageJsonStrapi);
}
async function captureException(error) {
    try {
        node_1.default.captureException(error);
        await node_1.default.flush();
    }
    catch (err) {
        /** ignore errors */
        return Promise.resolve();
    }
}
exports.captureException = captureException;
async function captureError(message) {
    try {
        node_1.default.captureMessage(message, node_1.Severity.Error);
        await node_1.default.flush();
    }
    catch (err) {
        /** ignore errors */
        return Promise.resolve();
    }
}
function captureStderr(name, error) {
    if ((0, types_1.isStderrError)(error) && error.stderr.trim() !== '') {
        error.stderr
            .trim()
            .split('\n')
            .forEach((line) => {
            node_1.default.addBreadcrumb({
                category: 'stderr',
                message: line,
                level: node_1.Severity.Error,
            });
        });
    }
    return captureError(name);
}
exports.captureStderr = captureStderr;
const getProperties = (scope, error) => {
    const eventProperties = {
        error: typeof error === 'string' ? error : error && error.message,
    };
    const userProperties = {
        os: os_1.default.type(),
        osPlatform: os_1.default.platform(),
        osArch: os_1.default.arch(),
        osRelease: os_1.default.release(),
        nodeVersion: process.versions.node,
    };
    const groupProperties = {
        version: scope.strapiVersion,
        docker: scope.docker,
        useYarn: scope.useYarn,
        useTypescriptOnServer: scope.useTypescript,
        useTypescriptOnAdmin: scope.useTypescript,
        isHostedOnStrapiCloud: process.env.STRAPI_HOSTING === 'strapi.cloud',
        noRun: (scope.runQuickstartApp !== true).toString(),
        projectId: scope.uuid,
    };
    return {
        eventProperties,
        userProperties,
        groupProperties: addPackageJsonStrapiMetadata(groupProperties, scope),
    };
};
function trackEvent(event, payload) {
    if (process.env.NODE_ENV === 'test') {
        return;
    }
    try {
        return (0, node_fetch_1.default)('https://analytics.strapi.io/api/v2/track', {
            method: 'POST',
            body: JSON.stringify({
                event,
                ...payload,
            }),
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'X-Strapi-Event': event,
            },
        }).catch(() => { });
    }
    catch (err) {
        /** ignore errors */
        return Promise.resolve();
    }
}
async function trackError({ scope, error }) {
    const properties = getProperties(scope, error);
    try {
        return await trackEvent('didNotCreateProject', {
            deviceId: scope.deviceId,
            ...properties,
        });
    }
    catch (err) {
        /** ignore errors */
        return Promise.resolve();
    }
}
exports.trackError = trackError;
async function trackUsage({ event, scope, error, }) {
    const properties = getProperties(scope, error);
    try {
        return await trackEvent(event, {
            deviceId: scope.deviceId,
            ...properties,
        });
    }
    catch (err) {
        /** ignore errors */
        return Promise.resolve();
    }
}
exports.trackUsage = trackUsage;
//# sourceMappingURL=usage.js.map