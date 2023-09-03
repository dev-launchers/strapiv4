"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const typescript_utils_1 = __importDefault(require("@strapi/typescript-utils"));
const utils = __importStar(require("@strapi/utils"));
const validate_input_1 = __importDefault(require("./utils/validate-input"));
const LANGUAGES = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
};
const logInstructions = (pluginName, { language }) => {
    const maxLength = `    resolve: './src/plugins/${pluginName}'`.length;
    const separator = Array(maxLength).fill('─').join('');
    const exportInstruction = language === 'js' ? 'module.exports =' : 'export default';
    return `
You can now enable your plugin by adding the following in ${chalk_1.default.yellow(`./config/plugins.${language}`)}
${separator}
${exportInstruction} {
  ${chalk_1.default.gray('// ...')}
  ${chalk_1.default.green(`'${pluginName}'`)}: {
    enabled: ${chalk_1.default.yellow(true)},
    resolve: ${chalk_1.default.yellow(`'./src/plugins/${pluginName}'`)}
  },
  ${chalk_1.default.gray('// ...')}
}
${separator}
`;
};
exports.default = (plop) => {
    // Plugin generator
    plop.setGenerator('plugin', {
        description: 'Generate a basic plugin',
        prompts: [
            {
                type: 'input',
                name: 'pluginName',
                message: 'Plugin name',
                validate: (input) => (0, validate_input_1.default)(input),
            },
            {
                type: 'list',
                name: 'language',
                message: 'Choose your preferred language',
                choices: Object.values(LANGUAGES),
                default: LANGUAGES.javascript,
            },
        ],
        actions(answers) {
            if (!answers) {
                return [];
            }
            const isTypescript = answers.language === LANGUAGES.typescript;
            const language = isTypescript ? 'ts' : 'js';
            const projectLanguage = typescript_utils_1.default.isUsingTypeScriptSync(process.cwd()) ? 'ts' : 'js';
            if (!utils.isKebabCase(answers.pluginName)) {
                answers.pluginName = utils.toKebabCase(answers.pluginName);
                console.log(chalk_1.default.yellow(`Strapi only supports kebab-cased names for plugins.\nYour plugin has been automatically renamed to "${answers.pluginName}".`));
            }
            return [
                {
                    type: 'addMany',
                    destination: 'plugins/{{ pluginName }}',
                    base: `files/${language}/plugin`,
                    templateFiles: `files/${language}/plugin/**`,
                },
                {
                    type: 'add',
                    path: 'plugins/{{ pluginName }}/README.md',
                    templateFile: `templates/${language}/README.md.hbs`,
                },
                {
                    type: 'add',
                    path: 'plugins/{{ pluginName }}/package.json',
                    templateFile: `templates/${language}/plugin-package.json.hbs`,
                },
                () => plop.renderString(logInstructions(answers.pluginName, { language: projectLanguage }), null),
            ];
        },
    });
};
//# sourceMappingURL=plugin.js.map