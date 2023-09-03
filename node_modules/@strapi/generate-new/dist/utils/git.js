"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const execa_1 = __importDefault(require("execa"));
async function isInGitRepository(rootDir) {
    try {
        await (0, execa_1.default)('git', ['rev-parse', '--is-inside-work-tree'], { stdio: 'ignore', cwd: rootDir });
        return true;
    }
    catch (_) {
        return false;
    }
}
async function isInMercurialRepository(rootDir) {
    try {
        await (0, execa_1.default)('hg', ['-cwd', '.', 'root'], { stdio: 'ignore', cwd: rootDir });
        return true;
    }
    catch (_) {
        return false;
    }
}
async function tryGitInit(rootDir) {
    try {
        await (0, execa_1.default)('git', ['--version'], { stdio: 'ignore' });
        if ((await isInGitRepository(rootDir)) || (await isInMercurialRepository(rootDir))) {
            return false;
        }
        await (0, execa_1.default)('git', ['init'], { stdio: 'ignore', cwd: rootDir });
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.default = tryGitInit;
//# sourceMappingURL=git.js.map