"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_utils_1 = __importDefault(require("@strapi/typescript-utils"));
const get_destination_prompts_1 = __importDefault(require("./prompts/get-destination-prompts"));
const get_file_path_1 = __importDefault(require("./utils/get-file-path"));
const validate_input_1 = __importDefault(require("./utils/validate-input"));
exports.default = (plop) => {
    // Controller generator
    plop.setGenerator('controller', {
        description: 'Generate a controller for an API',
        prompts: [
            {
                type: 'input',
                name: 'id',
                message: 'Controller name',
                validate: (input) => (0, validate_input_1.default)(input),
            },
            ...(0, get_destination_prompts_1.default)('controller', plop.getDestBasePath()),
        ],
        actions(answers) {
            if (!answers) {
                return [];
            }
            const filePath = (0, get_file_path_1.default)(answers.destination);
            const currentDir = process.cwd();
            const language = typescript_utils_1.default.isUsingTypeScriptSync(currentDir) ? 'ts' : 'js';
            return [
                {
                    type: 'add',
                    path: `${filePath}/controllers/{{ id }}.${language}`,
                    templateFile: `templates/${language}/controller.${language}.hbs`,
                },
            ];
        },
    });
};
//# sourceMappingURL=controller.js.map