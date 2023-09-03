"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_input_1 = __importDefault(require("../utils/validate-input"));
const questions = [
    {
        type: 'list',
        name: 'kind',
        message: 'Please choose the model type',
        default: 'collectionType',
        choices: [
            { name: 'Collection Type', value: 'collectionType' },
            { name: 'Single Type', value: 'singleType' },
        ],
        validate: (input) => (0, validate_input_1.default)(input),
    },
];
exports.default = questions;
//# sourceMappingURL=kind-prompts.js.map