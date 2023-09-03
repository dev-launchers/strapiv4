"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const lodash_1 = require("lodash");
const usage_1 = require("./utils/usage");
const db_configs_1 = __importDefault(require("./utils/db-configs"));
const db_client_dependencies_1 = __importDefault(require("./utils/db-client-dependencies"));
const db_questions_1 = __importDefault(require("./utils/db-questions"));
const create_project_1 = __importDefault(require("./create-project"));
const LANGUAGES = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
};
exports.default = async (scope) => {
    if (!scope.useTypescript) {
        const language = await askAboutLanguages();
        scope.useTypescript = language === LANGUAGES.typescript;
    }
    await (0, usage_1.trackUsage)({ event: 'didChooseCustomDatabase', scope });
    const configuration = await askDbInfosAndTest(scope).catch((error) => {
        return (0, usage_1.trackUsage)({ event: 'didNotConnectDatabase', scope, error }).then(() => {
            throw error;
        });
    });
    console.log();
    console.log('Creating a project with custom database options.');
    await (0, usage_1.trackUsage)({ event: 'didConnectDatabase', scope });
    return (0, create_project_1.default)(scope, configuration);
};
async function askDbInfosAndTest(scope) {
    const { client, connection } = await askDatabaseInfos(scope);
    return {
        client,
        connection,
        dependencies: (0, db_client_dependencies_1.default)({ client }),
    };
}
async function askDatabaseInfos(scope) {
    const { client } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'client',
            message: 'Choose your default database client',
            choices: ['sqlite', 'postgres', 'mysql'],
            default: 'sqlite',
        },
    ]);
    const questions = db_questions_1.default[client].map((q) => q({ scope, client }));
    if (!questions) {
        return { client };
    }
    const responses = await inquirer_1.default.prompt(questions);
    const connection = (0, lodash_1.merge)({}, db_configs_1.default[client] || {}, {
        client,
        connection: responses,
    });
    return {
        client,
        connection,
    };
}
async function askAboutLanguages() {
    const { language } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'language',
            message: 'Choose your preferred language',
            choices: Object.values(LANGUAGES),
            default: LANGUAGES.javascript,
        },
    ]);
    return language;
}
//# sourceMappingURL=create-customized-project.js.map