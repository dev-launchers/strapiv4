"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const semver_1 = __importDefault(require("semver"));
const engines_1 = __importDefault(require("../resources/json/common/engines"));
function checkRequirements() {
    const currentNodeVersion = process.versions.node;
    // error if the node version isn't supported
    if (!semver_1.default.satisfies(currentNodeVersion, engines_1.default.node)) {
        console.error((0, chalk_1.red)(`You are running ${(0, chalk_1.bold)(`Node.js ${currentNodeVersion}`)}`));
        console.error(`Strapi requires ${(0, chalk_1.bold)((0, chalk_1.green)(`Node.js ${engines_1.default.node}`))}`);
        console.error('Please make sure to use the right version of Node.');
        process.exit(1);
    }
    // warn if not using a LTS version
    else if (semver_1.default.satisfies(currentNodeVersion, '15.x.x || 17.x.x || 19.x.x')) {
        console.warn((0, chalk_1.yellow)(`You are running ${(0, chalk_1.bold)(`Node.js ${currentNodeVersion}`)}`));
        console.warn(`Strapi only supports ${(0, chalk_1.bold)((0, chalk_1.green)('LTS versions of Node.js'))}, other versions may not be compatible.`);
    }
}
exports.default = checkRequirements;
//# sourceMappingURL=check-requirements.js.map