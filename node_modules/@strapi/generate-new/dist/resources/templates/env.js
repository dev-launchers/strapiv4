"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const lodash_1 = __importDefault(require("lodash"));
const generateASecret = () => crypto_1.default.randomBytes(16).toString('base64');
exports.default = () => {
    const tmpl = fs_1.default.readFileSync(path_1.default.join(__dirname, 'env.template'));
    const compile = lodash_1.default.template(tmpl.toString());
    return compile({
        appKeys: new Array(4).fill(null).map(generateASecret).join(','),
        apiTokenSalt: generateASecret(),
        transferTokenSalt: generateASecret(),
        adminJwtToken: generateASecret(),
    });
};
//# sourceMappingURL=env.js.map