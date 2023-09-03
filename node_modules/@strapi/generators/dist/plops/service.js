"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_utils_1 = __importDefault(require("@strapi/typescript-utils"));
const get_destination_prompts_1 = __importDefault(require("./prompts/get-destination-prompts"));
const get_file_path_1 = __importDefault(require("./utils/get-file-path"));
exports.default = (plop) => {
    // Service generator
    plop.setGenerator('service', {
        description: 'Generate a service for an API',
        prompts: [
            {
                type: 'input',
                name: 'id',
                message: 'Service name',
            },
            ...(0, get_destination_prompts_1.default)('service', plop.getDestBasePath()),
        ],
        actions(answers) {
            if (!answers) {
                return [];
            }
            const filePath = (0, get_file_path_1.default)(answers?.destination);
            const currentDir = process.cwd();
            const language = typescript_utils_1.default.isUsingTypeScriptSync(currentDir) ? 'ts' : 'js';
            return [
                {
                    type: 'add',
                    path: `${filePath}/services/{{ id }}.${language}`,
                    templateFile: `templates/${language}/service.${language}.hbs`,
                },
            ];
        },
    });
};
//# sourceMappingURL=service.js.map