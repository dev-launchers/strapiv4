"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const usage_1 = require("./utils/usage");
const db_configs_1 = __importDefault(require("./utils/db-configs"));
const db_client_dependencies_1 = __importDefault(require("./utils/db-client-dependencies"));
const db_client_name_1 = __importDefault(require("./utils/db-client-name"));
const create_project_1 = __importDefault(require("./create-project"));
exports.default = async (scope) => {
    console.log('Creating a project from the database CLI arguments.');
    await (0, usage_1.trackUsage)({ event: 'didChooseCustomDatabase', scope });
    const { client } = scope.database ?? {};
    if (!client) {
        throw new Error('Missing client');
    }
    const configuration = {
        client: (0, db_client_name_1.default)({ client }),
        connection: (0, lodash_1.merge)({}, db_configs_1.default[client] || {}, scope.database),
        dependencies: (0, db_client_dependencies_1.default)({ scope, client }),
    };
    return (0, create_project_1.default)(scope, configuration);
};
//# sourceMappingURL=create-cli-db-project.js.map