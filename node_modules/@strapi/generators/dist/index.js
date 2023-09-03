"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.runCLI = void 0;
const node_path_1 = require("node:path");
const plop_1 = require("plop");
const node_plop_1 = __importDefault(require("node-plop"));
// Starts the Plop CLI programmatically
const runCLI = () => {
    plop_1.Plop.launch({ configPath: (0, node_path_1.join)(__dirname, 'plopfile.js') }, (env) => {
        const options = { ...env, dest: (0, node_path_1.join)(process.cwd(), 'src') };
        (0, plop_1.run)(options, undefined, true);
    });
};
exports.runCLI = runCLI;
// Runs a generator programmatically without prompts
const generate = async (generatorName, options, { dir = process.cwd(), plopFile = 'plopfile.js' } = {}) => {
    const plop = (0, node_plop_1.default)((0, node_path_1.join)(__dirname, plopFile), {
        destBasePath: (0, node_path_1.join)(dir, 'src'),
        force: false,
    });
    const generator = plop.getGenerator(generatorName);
    await generator.runActions(options, {
        onSuccess() { },
        onFailure() { },
        onComment() { },
    });
};
exports.generate = generate;
//# sourceMappingURL=index.js.map