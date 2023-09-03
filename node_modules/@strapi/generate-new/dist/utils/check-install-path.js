"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const stop_process_1 = __importDefault(require("./stop-process"));
// Checks if the an empty directory exists at rootPath
exports.default = async (rootPath) => {
    if (await fs_extra_1.default.pathExists(rootPath)) {
        const stat = await fs_extra_1.default.stat(rootPath);
        if (!stat.isDirectory()) {
            (0, stop_process_1.default)(`⛔️ ${chalk_1.default.green(rootPath)} is not a directory. Make sure to create a Strapi application in an empty directory.`);
        }
        const files = await fs_extra_1.default.readdir(rootPath);
        if (files.length > 1) {
            (0, stop_process_1.default)(`⛔️ You can only create a Strapi app in an empty directory.\nMake sure ${chalk_1.default.green(rootPath)} is empty.`);
        }
    }
};
//# sourceMappingURL=check-install-path.js.map