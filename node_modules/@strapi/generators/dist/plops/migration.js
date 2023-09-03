"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_utils_1 = __importDefault(require("@strapi/typescript-utils"));
const validate_file_name_input_1 = __importDefault(require("./utils/validate-file-name-input"));
const get_formatted_date_1 = __importDefault(require("./utils/get-formatted-date"));
exports.default = (plop) => {
    // Migration generator
    plop.setGenerator('migration', {
        description: 'Generate a migration',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Migration name',
                validate: (input) => (0, validate_file_name_input_1.default)(input),
            },
        ],
        actions() {
            const currentDir = process.cwd();
            const language = typescript_utils_1.default.isUsingTypeScriptSync(currentDir) ? 'ts' : 'js';
            const timestamp = (0, get_formatted_date_1.default)();
            return [
                {
                    type: 'add',
                    path: `${currentDir}/database/migrations/${timestamp}.{{ name }}.${language}`,
                    templateFile: `templates/${language}/migration.${language}.hbs`,
                },
            ];
        },
    });
};
//# sourceMappingURL=migration.js.map