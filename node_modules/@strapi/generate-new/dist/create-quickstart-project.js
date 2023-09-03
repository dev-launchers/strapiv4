"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const execa_1 = __importDefault(require("execa"));
const usage_1 = require("./utils/usage");
const db_configs_js_1 = __importDefault(require("./utils/db-configs.js"));
const db_client_dependencies_js_1 = __importDefault(require("./utils/db-client-dependencies.js"));
const create_project_1 = __importDefault(require("./create-project"));
async function createQuickStartProject(scope) {
    console.log('Creating a quickstart project.');
    await (0, usage_1.trackUsage)({ event: 'didChooseQuickstart', scope });
    // get default sqlite config
    const client = 'sqlite';
    const configuration = {
        client,
        connection: db_configs_js_1.default[client],
        dependencies: (0, db_client_dependencies_js_1.default)({ client }),
    };
    await (0, create_project_1.default)(scope, configuration);
    if (scope.runQuickstartApp !== true)
        return;
    console.log(`Running your Strapi application.`);
    try {
        await (0, usage_1.trackUsage)({ event: 'willStartServer', scope });
        await (0, execa_1.default)('npm', ['run', 'develop'], {
            stdio: 'inherit',
            cwd: scope.rootPath,
            env: {
                FORCE_COLOR: '1',
            },
        });
    }
    catch (error) {
        if (typeof error === 'string' || error instanceof Error) {
            await (0, usage_1.trackUsage)({
                event: 'didNotStartServer',
                scope,
                error,
            });
            await (0, usage_1.captureStderr)('didNotStartServer', error);
        }
        process.exit(1);
    }
}
exports.default = createQuickStartProject;
//# sourceMappingURL=create-quickstart-project.js.map