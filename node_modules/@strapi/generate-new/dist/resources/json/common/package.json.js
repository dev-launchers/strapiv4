"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const engines_1 = __importDefault(require("./engines"));
exports.default = (opts) => {
    const { strapiDependencies, additionalsDependencies, strapiVersion, projectName, uuid, packageJsonStrapi, } = opts;
    // Finally, return the JSON.
    return {
        name: projectName,
        private: true,
        version: '0.1.0',
        description: 'A Strapi application',
        scripts: {
            develop: 'strapi develop',
            start: 'strapi start',
            build: 'strapi build',
            strapi: 'strapi',
        },
        devDependencies: {},
        dependencies: {
            ...strapiDependencies.reduce((acc, key) => {
                acc[key] = strapiVersion;
                return acc;
            }, {}),
            ...additionalsDependencies,
        },
        author: {
            name: 'A Strapi developer',
        },
        strapi: {
            uuid,
            ...packageJsonStrapi,
        },
        engines: engines_1.default,
        license: 'MIT',
    };
};
//# sourceMappingURL=package.json.js.map