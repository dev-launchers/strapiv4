"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usage_1 = require("./utils/usage");
const check_install_path_1 = __importDefault(require("./utils/check-install-path"));
const create_cli_db_project_1 = __importDefault(require("./create-cli-db-project"));
const create_customized_project_1 = __importDefault(require("./create-customized-project"));
const create_quickstart_project_1 = __importDefault(require("./create-quickstart-project"));
exports.default = async (scope) => {
    const hasDatabaseConfig = Boolean(scope.database);
    // check rootPath is empty
    (0, check_install_path_1.default)(scope.rootPath);
    await (0, usage_1.trackUsage)({ event: 'willCreateProject', scope });
    // if database config is provided don't test the connection and create the project directly
    if (hasDatabaseConfig) {
        return (0, create_cli_db_project_1.default)(scope);
    }
    // if cli quickstart create project with default sqlite options
    if (scope.quick === true) {
        return (0, create_quickstart_project_1.default)(scope);
    }
    // create a project with full list of questions
    return (0, create_customized_project_1.default)(scope);
};
//# sourceMappingURL=generate-new.js.map