"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertValidStrapi = void 0;
const providers_1 = require("../errors/providers");
const assertValidStrapi = (strapi, msg = '') => {
    if (!strapi) {
        throw new providers_1.ProviderInitializationError(`${msg}. Strapi instance not found.`);
    }
};
exports.assertValidStrapi = assertValidStrapi;
//# sourceMappingURL=providers.js.map