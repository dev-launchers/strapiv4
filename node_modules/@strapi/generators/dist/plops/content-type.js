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
const path_1 = require("path");
const slugify_1 = __importDefault(require("@sindresorhus/slugify"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const utils = __importStar(require("@strapi/utils"));
const typescript_utils_1 = __importDefault(require("@strapi/typescript-utils"));
const get_destination_prompts_1 = __importDefault(require("./prompts/get-destination-prompts"));
const get_file_path_1 = __importDefault(require("./utils/get-file-path"));
const ct_names_prompts_1 = __importDefault(require("./prompts/ct-names-prompts"));
const kind_prompts_1 = __importDefault(require("./prompts/kind-prompts"));
const draft_and_publish_prompts_1 = __importDefault(require("./prompts/draft-and-publish-prompts"));
const get_attributes_prompts_1 = __importDefault(require("./prompts/get-attributes-prompts"));
const bootstrap_api_prompts_1 = __importDefault(require("./prompts/bootstrap-api-prompts"));
exports.default = (plop) => {
    // Model generator
    plop.setGenerator('content-type', {
        description: 'Generate a content type for an API',
        async prompts(inquirer) {
            const config = await inquirer.prompt([
                ...ct_names_prompts_1.default,
                ...kind_prompts_1.default,
                ...draft_and_publish_prompts_1.default,
            ]);
            const attributes = await (0, get_attributes_prompts_1.default)(inquirer);
            const api = await inquirer.prompt([
                ...(0, get_destination_prompts_1.default)('model', plop.getDestBasePath()),
                {
                    when: (answers) => answers.destination === 'new',
                    type: 'input',
                    name: 'id',
                    default: config.singularName,
                    message: 'Name of the new API?',
                    async validate(input) {
                        if (!utils.isKebabCase(input)) {
                            return 'Value must be in kebab-case';
                        }
                        const apiPath = (0, path_1.join)(plop.getDestBasePath(), 'api');
                        const exists = await fs_extra_1.default.pathExists(apiPath);
                        if (!exists) {
                            return true;
                        }
                        const apiDir = await fs_extra_1.default.readdir(apiPath, { withFileTypes: true });
                        const apiDirContent = apiDir.filter((fd) => fd.isDirectory());
                        if (apiDirContent.findIndex((dir) => dir.name === input) !== -1) {
                            throw new Error('This name is already taken.');
                        }
                        return true;
                    },
                },
                ...bootstrap_api_prompts_1.default,
            ]);
            return {
                ...config,
                ...api,
                attributes,
            };
        },
        actions(answers) {
            if (!answers) {
                return [];
            }
            const attributes = answers.attributes.reduce((object, answer) => {
                const val = { type: answer.attributeType };
                if (answer.attributeType === 'enumeration') {
                    val.enum = answer.enum.split(',').map((item) => item.trim());
                }
                if (answer.attributeType === 'media') {
                    val.allowedTypes = ['images', 'files', 'videos', 'audios'];
                    val.multiple = answer.multiple;
                }
                return Object.assign(object, { [answer.attributeName]: val }, {});
            }, {});
            const filePath = (0, get_file_path_1.default)(answers.destination);
            // TODO: use basePath instead
            const currentDir = process.cwd();
            const language = typescript_utils_1.default.isUsingTypeScriptSync(currentDir) ? 'ts' : 'js';
            const baseActions = [
                {
                    type: 'add',
                    path: `${filePath}/content-types/{{ singularName }}/schema.json`,
                    templateFile: `templates/${language}/content-type.schema.json.hbs`,
                    data: {
                        collectionName: (0, slugify_1.default)(answers.pluralName, { separator: '_' }),
                    },
                },
            ];
            if (Object.entries(attributes).length > 0) {
                baseActions.push({
                    type: 'modify',
                    path: `${filePath}/content-types/{{ singularName }}/schema.json`,
                    transform(template) {
                        const parsedTemplate = JSON.parse(template);
                        parsedTemplate.attributes = attributes;
                        return JSON.stringify(parsedTemplate, null, 2);
                    },
                });
            }
            if (answers.bootstrapApi) {
                const { singularName } = answers;
                let uid;
                if (answers.destination === 'new') {
                    uid = `api::${answers.id}.${singularName}`;
                }
                else if (answers.api) {
                    uid = `api::${answers.api}.${singularName}`;
                }
                else if (answers.plugin) {
                    uid = `plugin::${answers.plugin}.${singularName}`;
                }
                baseActions.push({
                    type: 'add',
                    path: `${filePath}/controllers/{{ singularName }}.${language}`,
                    templateFile: `templates/${language}/core-controller.${language}.hbs`,
                    data: { uid },
                }, {
                    type: 'add',
                    path: `${filePath}/services/{{ singularName }}.${language}`,
                    templateFile: `templates/${language}/core-service.${language}.hbs`,
                    data: { uid },
                }, {
                    type: 'add',
                    path: `${filePath}/routes/{{ singularName }}.${language}`,
                    templateFile: `templates/${language}/core-router.${language}.hbs`,
                    data: { uid },
                });
            }
            return baseActions;
        },
    });
};
//# sourceMappingURL=content-type.js.map