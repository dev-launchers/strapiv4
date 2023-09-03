"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pluralize_1 = __importDefault(require("pluralize"));
const api_1 = __importDefault(require("./plops/api"));
const controller_1 = __importDefault(require("./plops/controller"));
const content_type_1 = __importDefault(require("./plops/content-type"));
const plugin_1 = __importDefault(require("./plops/plugin"));
const policy_1 = __importDefault(require("./plops/policy"));
const middleware_1 = __importDefault(require("./plops/middleware"));
const migration_1 = __importDefault(require("./plops/migration"));
const service_1 = __importDefault(require("./plops/service"));
exports.default = (plop) => {
    // Plop config
    plop.setWelcomeMessage('Strapi Generators');
    plop.addHelper('pluralize', (text) => (0, pluralize_1.default)(text));
    // Generators
    (0, api_1.default)(plop);
    (0, controller_1.default)(plop);
    (0, content_type_1.default)(plop);
    (0, plugin_1.default)(plop);
    (0, policy_1.default)(plop);
    (0, middleware_1.default)(plop);
    (0, migration_1.default)(plop);
    (0, service_1.default)(plop);
};
//# sourceMappingURL=plopfile.js.map