"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbsoluteServerUrl = exports.getAbsoluteAdminUrl = exports.getConfigUrls = void 0;
const lodash_1 = __importDefault(require("lodash"));
const string_formatting_1 = require("./string-formatting");
const getConfigUrls = (config, forAdminBuild = false) => {
    const serverConfig = config.get('server');
    const adminConfig = config.get('admin');
    // Defines serverUrl value
    let serverUrl = lodash_1.default.get(serverConfig, 'url', '');
    serverUrl = lodash_1.default.trim(serverUrl, '/ ');
    if (typeof serverUrl !== 'string') {
        throw new Error('Invalid server url config. Make sure the url is a string.');
    }
    if (serverUrl.startsWith('http')) {
        try {
            serverUrl = lodash_1.default.trim(new URL(serverConfig.url).toString(), '/');
        }
        catch (e) {
            throw new Error('Invalid server url config. Make sure the url defined in server.js is valid.');
        }
    }
    else if (serverUrl !== '') {
        serverUrl = `/${serverUrl}`;
    }
    // Defines adminUrl value
    let adminUrl = lodash_1.default.get(adminConfig, 'url', '/admin');
    adminUrl = lodash_1.default.trim(adminUrl, '/ ');
    if (typeof adminUrl !== 'string') {
        throw new Error('Invalid admin url config. Make sure the url is a non-empty string.');
    }
    if (adminUrl.startsWith('http')) {
        try {
            adminUrl = lodash_1.default.trim(new URL(adminUrl).toString(), '/');
        }
        catch (e) {
            throw new Error('Invalid admin url config. Make sure the url defined in server.js is valid.');
        }
    }
    else {
        adminUrl = `${serverUrl}/${adminUrl}`;
    }
    // Defines adminPath value
    let adminPath = adminUrl;
    if (serverUrl.startsWith('http') &&
        adminUrl.startsWith('http') &&
        new URL(adminUrl).origin === new URL(serverUrl).origin &&
        !forAdminBuild) {
        adminPath = adminUrl.replace((0, string_formatting_1.getCommonPath)(serverUrl, adminUrl), '');
        adminPath = `/${lodash_1.default.trim(adminPath, '/')}`;
    }
    else if (adminUrl.startsWith('http')) {
        adminPath = new URL(adminUrl).pathname;
    }
    return {
        serverUrl,
        adminUrl,
        adminPath,
    };
};
exports.getConfigUrls = getConfigUrls;
const getAbsoluteUrl = (adminOrServer) => (config, forAdminBuild = false) => {
    const { serverUrl, adminUrl } = (0, exports.getConfigUrls)(config, forAdminBuild);
    const url = adminOrServer === 'server' ? serverUrl : adminUrl;
    if (url.startsWith('http')) {
        return url;
    }
    const hostname = config.get('environment') === 'development' &&
        ['127.0.0.1', '0.0.0.0'].includes(config.get('server.host'))
        ? 'localhost'
        : config.get('server.host');
    return `http://${hostname}:${config.get('server.port')}${url}`;
};
exports.getAbsoluteAdminUrl = getAbsoluteUrl('admin');
exports.getAbsoluteServerUrl = getAbsoluteUrl('server');
//# sourceMappingURL=config.js.map