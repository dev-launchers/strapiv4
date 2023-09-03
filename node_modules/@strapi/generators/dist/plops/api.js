"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_extra_1 = __importDefault(require("fs-extra"));
const typescript_utils_1 = __importDefault(require("@strapi/typescript-utils"));
const validate_input_1 = __importDefault(require("./utils/validate-input"));
exports.default = (plop) => {
    // API generator
    plop.setGenerator('api', {
        description: 'Generate a basic API',
        prompts: [
            {
                type: 'input',
                name: 'id',
                message: 'API name',
                validate: (input) => (0, validate_input_1.default)(input),
            },
            {
                type: 'confirm',
                name: 'isPluginApi',
                message: 'Is this API for a plugin?',
            },
            {
                when: (answers) => answers.isPluginApi,
                type: 'list',
                name: 'plugin',
                message: 'Plugin name',
                async choices() {
                    const pluginsPath = (0, path_1.join)(plop.getDestBasePath(), 'plugins');
                    const exists = await fs_extra_1.default.pathExists(pluginsPath);
                    if (!exists) {
                        throw Error('Couldn\'t find a "plugins" directory');
                    }
                    const pluginsDir = await fs_extra_1.default.readdir(pluginsPath, { withFileTypes: true });
                    const pluginsDirContent = pluginsDir.filter((fd) => fd.isDirectory());
                    if (pluginsDirContent.length === 0) {
                        throw Error('The "plugins" directory is empty');
                    }
                    return pluginsDirContent;
                },
            },
        ],
        actions(answers) {
            if (!answers) {
                return [];
            }
            const filePath = answers.isPluginApi && answers.plugin ? 'plugins/{{ plugin }}' : 'api/{{ id }}';
            const currentDir = process.cwd();
            const language = typescript_utils_1.default.isUsingTypeScriptSync(currentDir) ? 'ts' : 'js';
            const baseActions = [
                {
                    type: 'add',
                    path: `${filePath}/controllers/{{ id }}.${language}`,
                    templateFile: `templates/${language}/controller.${language}.hbs`,
                },
                {
                    type: 'add',
                    path: `${filePath}/services/{{ id }}.${language}`,
                    templateFile: `templates/${language}/service.${language}.hbs`,
                },
            ];
            if (answers.isPluginApi) {
                return baseActions;
            }
            return [
                {
                    type: 'add',
                    path: `${filePath}/routes/{{ id }}.${language}`,
                    templateFile: `templates/${language}/single-route.${language}.hbs`,
                },
                ...baseActions,
            ];
        },
    });
};
//# sourceMappingURL=api.js.map