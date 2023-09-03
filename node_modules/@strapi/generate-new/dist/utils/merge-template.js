"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const fp_1 = __importDefault(require("lodash/fp"));
const chalk_1 = __importDefault(require("chalk"));
const fetch_npm_template_1 = require("./fetch-npm-template");
// Specify all the files and directories a template can have
const allowFile = Symbol('alloFile');
const allowChildren = Symbol('allowChildren');
const allowedTemplateContents = {
    'README.md': allowFile,
    '.env.example': allowFile,
    'package.json': allowFile,
    src: allowChildren,
    data: allowChildren,
    database: allowChildren,
    public: allowChildren,
    scripts: allowChildren,
};
// Merge template with new project being created
async function mergeTemplate(scope, rootPath) {
    if (!scope.template) {
        throw new Error('Missing template');
    }
    let templatePath;
    let templateParentPath;
    let templatePackageInfo;
    const isLocalTemplate = ['./', '../', '/'].some((filePrefix) => scope.template?.startsWith(filePrefix));
    if (isLocalTemplate) {
        // Template is a local directory
        console.log('Installing local template.');
        templatePath = path_1.default.resolve(rootPath, '..', scope.template);
    }
    else {
        // Template should be an npm package. Fetch template info
        templatePackageInfo = await (0, fetch_npm_template_1.getTemplatePackageInfo)(scope.template);
        console.log(`Installing ${chalk_1.default.yellow(templatePackageInfo.name)} template.`);
        // Download template repository to a temporary directory
        templateParentPath = await fs_extra_1.default.mkdtemp(path_1.default.join(os_1.default.tmpdir(), 'strapi-'));
        templatePath = await (0, fetch_npm_template_1.downloadNpmTemplate)(templatePackageInfo, templateParentPath);
    }
    // Make sure the downloaded template matches the required format
    const templateConfig = await checkTemplateRootStructure(templatePath);
    await checkTemplateContentsStructure(path_1.default.resolve(templatePath, 'template'));
    // Merge contents of the template in the project
    await mergePackageJSON({ rootPath, templateConfig, templatePackageInfo });
    await mergeFilesAndDirectories(rootPath, templatePath);
    // Delete the template directory if it was downloaded
    if (!isLocalTemplate && templateParentPath) {
        await fs_extra_1.default.remove(templateParentPath);
    }
}
exports.default = mergeTemplate;
// Make sure the template has the required top-level structure
async function checkTemplateRootStructure(templatePath) {
    // Make sure the root of the repo has a template.json file
    const templateJsonPath = path_1.default.join(templatePath, 'template.json');
    const templateJsonExists = await fs_extra_1.default.pathExists(templateJsonPath);
    if (!templateJsonExists) {
        throw new Error(`A template must have a ${chalk_1.default.green('template.json')} root file`);
    }
    const templateJsonStat = await fs_extra_1.default.stat(templateJsonPath);
    if (!templateJsonStat.isFile()) {
        throw new Error(`A template's ${chalk_1.default.green('template.json')} must be a file`);
    }
    const templateConfig = require(templateJsonPath);
    // Make sure the root of the repo has a template folder
    const templateDirPath = path_1.default.join(templatePath, 'template');
    try {
        const stat = await fs_extra_1.default.stat(templateDirPath);
        if (!stat.isDirectory()) {
            throw Error(`A template must have a root ${chalk_1.default.green('template/')} directory`);
        }
    }
    catch (error) {
        if (error instanceof Error && error.code === 'ENOENT') {
            throw Error(`A template must have a root ${chalk_1.default.green('template/')} directory`);
        }
        throw error;
    }
    return templateConfig;
}
// Traverse template tree to make sure each file and folder is allowed
async function checkTemplateContentsStructure(templateContentsPath) {
    // Recursively check if each item in a directory is allowed
    const checkPathContents = async (pathToCheck, parents) => {
        const contents = await fs_extra_1.default.readdir(pathToCheck);
        for (const item of contents) {
            const nextParents = [...parents, item];
            const matchingTreeValue = fp_1.default.get(nextParents, allowedTemplateContents);
            // Treat files and directories separately
            const itemPath = path_1.default.resolve(pathToCheck, item);
            const isDirectory = (await fs_extra_1.default.stat(itemPath)).isDirectory();
            if (matchingTreeValue === undefined) {
                // Unknown paths are forbidden
                throw Error(`Illegal template structure, unknown path ${chalk_1.default.green(nextParents.join('/'))}`);
            }
            if (matchingTreeValue === allowFile) {
                if (!isDirectory) {
                    // All good, the file is allowed
                    return;
                }
                throw Error(`Illegal template structure, expected a file and got a directory at ${chalk_1.default.green(nextParents.join('/'))}`);
            }
            if (isDirectory) {
                if (matchingTreeValue === allowChildren) {
                    // All children are allowed
                    return;
                }
                // Check if the contents of the directory are allowed
                await checkPathContents(itemPath, nextParents);
            }
            else {
                throw Error(`Illegal template structure, unknown file ${chalk_1.default.green(nextParents.join('/'))}`);
            }
        }
    };
    await checkPathContents(templateContentsPath, []);
}
// Merge the template's template.json into the Strapi project's package.json
async function mergePackageJSON({ rootPath, templateConfig, templatePackageInfo, }) {
    // Import the package.json as an object
    const packageJSON = require(path_1.default.resolve(rootPath, 'package.json'));
    if (!templateConfig.package) {
        // Nothing to overwrite
        return;
    }
    // Make sure the template.json doesn't overwrite the UUID
    if (fp_1.default.has('strapi.uuid', templateConfig.package)) {
        throw Error('A template cannot overwrite the Strapi UUID');
    }
    // Use lodash to deeply merge them
    const mergedConfig = fp_1.default.merge(templateConfig.package, packageJSON);
    // Add template info to package.json
    if (templatePackageInfo?.name) {
        fp_1.default.set('strapi.template', templatePackageInfo.name, mergedConfig);
    }
    // Save the merged config as the new package.json
    const packageJSONPath = path_1.default.join(rootPath, 'package.json');
    await fs_extra_1.default.writeJSON(packageJSONPath, mergedConfig, { spaces: 2 });
}
// Merge all allowed files and directories
async function mergeFilesAndDirectories(rootPath, templatePath) {
    const templateDir = path_1.default.join(templatePath, 'template');
    await fs_extra_1.default.copy(templateDir, rootPath, { overwrite: true, recursive: true });
}
//# sourceMappingURL=merge-template.js.map