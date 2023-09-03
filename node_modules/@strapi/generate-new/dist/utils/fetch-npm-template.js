"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadNpmTemplate = exports.getTemplatePackageInfo = void 0;
const path_1 = __importDefault(require("path"));
const execa_1 = __importDefault(require("execa"));
const chalk_1 = __importDefault(require("chalk"));
// Gets the package version on npm. Will fail if the package does not exist
async function getPackageInfo(packageName) {
    const { stdout } = await (0, execa_1.default)('npm', ['view', packageName, 'name', 'version', '--silent']);
    // Use regex to parse name and version from CLI result
    const match = stdout.match(/(?<=')(.*?)(?=')/gm);
    if (!match) {
        throw new Error('Could not match');
    }
    const [name, version] = match;
    return { name, version };
}
async function getTemplatePackageInfo(template) {
    // Check if template is a shorthand
    try {
        const longhand = `@strapi/template-${template}`;
        const packageInfo = await getPackageInfo(longhand);
        // Hasn't crashed so it is indeed a shorthand
        return packageInfo;
    }
    catch (error) {
        // Ignore error, we now know it's not a shorthand
    }
    // Fetch version of the non-shorthand package
    try {
        return await getPackageInfo(template);
    }
    catch (error) {
        throw new Error(`Could not find package ${chalk_1.default.yellow(template)} on npm`);
    }
}
exports.getTemplatePackageInfo = getTemplatePackageInfo;
async function downloadNpmTemplate({ name, version }, parentDir) {
    // Download from npm
    await (0, execa_1.default)('npm', ['install', `${name}@${version}`, '--no-save', '--silent'], {
        cwd: parentDir,
    });
    // Return the path of the actual template
    const exactTemplatePath = path_1.default.dirname(require.resolve(`${name}/package.json`, { paths: [parentDir] }));
    return exactTemplatePath;
}
exports.downloadNpmTemplate = downloadNpmTemplate;
//# sourceMappingURL=fetch-npm-template.js.map