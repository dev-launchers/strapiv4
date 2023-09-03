"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_extra_1 = __importDefault(require("fs-extra"));
exports.default = (action, basePath, { rootFolder = false } = {}) => {
    return [
        {
            type: 'list',
            name: 'destination',
            message: `Where do you want to add this ${action}?`,
            choices: [
                ...(rootFolder
                    ? [
                        {
                            name: `Add ${action} to root of project`,
                            value: 'root',
                        },
                    ]
                    : [
                        {
                            name: `Add ${action} to new API`,
                            value: 'new',
                        },
                    ]),
                { name: `Add ${action} to an existing API`, value: 'api' },
                { name: `Add ${action} to an existing plugin`, value: 'plugin' },
            ],
        },
        {
            when: (answers) => answers.destination === 'api',
            type: 'list',
            message: 'Which API is this for?',
            name: 'api',
            async choices() {
                const apiPath = (0, path_1.join)(basePath, 'api');
                const exists = await fs_extra_1.default.pathExists(apiPath);
                if (!exists) {
                    throw Error('Couldn\'t find an "api" directory');
                }
                const apiDir = await fs_extra_1.default.readdir(apiPath, { withFileTypes: true });
                const apiDirContent = apiDir.filter((fd) => fd.isDirectory());
                if (apiDirContent.length === 0) {
                    throw Error('The "api" directory is empty');
                }
                return apiDirContent;
            },
        },
        {
            when: (answers) => answers.destination === 'plugin',
            type: 'list',
            message: 'Which plugin is this for?',
            name: 'plugin',
            async choices() {
                const pluginsPath = (0, path_1.join)(basePath, 'plugins');
                const exists = await fs_extra_1.default.pathExists(pluginsPath);
                if (!exists) {
                    throw Error('Couldn\'t find a "plugins" directory');
                }
                const pluginsDir = await fs_extra_1.default.readdir(pluginsPath);
                const pluginsDirContent = pluginsDir.filter((api) => fs_extra_1.default.lstatSync((0, path_1.join)(pluginsPath, api)).isDirectory());
                if (pluginsDirContent.length === 0) {
                    throw Error('The "plugins" directory is empty');
                }
                return pluginsDirContent;
            },
        },
    ];
};
//# sourceMappingURL=get-destination-prompts.js.map