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
const pluralize_1 = __importDefault(require("pluralize"));
const slugify_1 = __importDefault(require("@sindresorhus/slugify"));
const utils = __importStar(require("@strapi/utils"));
const questions = [
    {
        type: 'input',
        name: 'displayName',
        message: 'Content type display name',
        validate: (input) => !!input,
    },
    {
        type: 'input',
        name: 'singularName',
        message: 'Content type singular name',
        default: (answers) => (0, slugify_1.default)(answers.displayName),
        validate(input) {
            if (!utils.isKebabCase(input)) {
                return 'Value must be in kebab-case';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'pluralName',
        message: 'Content type plural name',
        default: (answers) => (0, pluralize_1.default)(answers.singularName),
        validate(input, answers) {
            if (answers.singularName === input) {
                return 'Singular and plural names cannot be the same';
            }
            if (!utils.isKebabCase(input)) {
                return 'Value must be in kebab-case';
            }
            return true;
        },
    },
];
exports.default = questions;
//# sourceMappingURL=ct-names-prompts.js.map