"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const path_1 = require("path");
const fs_extra_1 = __importDefault(require("fs-extra"));
const chalk_1 = __importDefault(require("chalk"));
const execa_1 = __importDefault(require("execa"));
const ora_1 = __importDefault(require("ora"));
const lodash_1 = __importDefault(require("lodash"));
const stop_process_1 = __importDefault(require("./utils/stop-process"));
const usage_1 = require("./utils/usage");
const merge_template_js_1 = __importDefault(require("./utils/merge-template.js"));
const git_1 = __importDefault(require("./utils/git"));
const package_json_1 = __importDefault(require("./resources/json/common/package.json"));
const database_1 = require("./resources/templates/database");
const env_1 = __importDefault(require("./resources/templates/env"));
const types_1 = require("./types");
async function createProject(scope, { client, connection, dependencies }) {
    console.log(`Creating a new Strapi application at ${chalk_1.default.green(scope.rootPath)}.`);
    console.log('Creating files.');
    const { rootPath, useTypescript } = scope;
    const resources = (0, path_1.join)(__dirname, 'resources');
    const language = useTypescript ? 'ts' : 'js';
    try {
        // copy files
        await fs_extra_1.default.copy((0, path_1.join)(resources, 'files', language), rootPath);
        // copy dot files
        await fs_extra_1.default.writeFile((0, path_1.join)(rootPath, '.env'), (0, env_1.default)());
        const copyDotFilesFromSubDirectory = (subDirectory) => {
            const files = fs_extra_1.default.readdirSync((0, path_1.join)(resources, 'dot-files', subDirectory));
            return Promise.all(files.map((file) => {
                const src = (0, path_1.join)(resources, 'dot-files', subDirectory, file);
                const dest = (0, path_1.join)(rootPath, `.${file}`);
                return fs_extra_1.default.copy(src, dest);
            }));
        };
        // Copy common dot files
        copyDotFilesFromSubDirectory('common');
        // Copy JS dot files
        // For now we only support javascript and typescript, so if we're not using
        // typescript, then we can assume we're using javascript. We'll need to change
        // this behavior when we'll abstract the supported languages even more.
        if (!useTypescript) {
            copyDotFilesFromSubDirectory('js');
        }
        await (0, usage_1.trackUsage)({ event: 'didCopyProjectFiles', scope });
        // copy templates
        await fs_extra_1.default.writeJSON((0, path_1.join)(rootPath, 'package.json'), (0, package_json_1.default)({
            strapiDependencies: scope.strapiDependencies,
            additionalsDependencies: dependencies,
            strapiVersion: scope.strapiVersion,
            projectName: lodash_1.default.kebabCase(scope.name),
            uuid: scope.uuid,
            packageJsonStrapi: scope.packageJsonStrapi,
        }), {
            spaces: 2,
        });
        await (0, usage_1.trackUsage)({ event: 'didWritePackageJSON', scope });
        if (useTypescript) {
            const tsJSONDir = (0, path_1.join)(__dirname, 'resources/json/ts');
            const filesMap = {
                'tsconfig-admin.json.js': 'src/admin',
                'tsconfig-server.json.js': '.',
            };
            for (const [fileName, path] of Object.entries(filesMap)) {
                const srcPath = (0, path_1.join)(tsJSONDir, fileName);
                const destPath = (0, path_1.join)(rootPath, path, 'tsconfig.json');
                const json = require(srcPath).default();
                await fs_extra_1.default.writeJSON(destPath, json, { spaces: 2 });
            }
        }
        else {
            const jsJSONDir = (0, path_1.join)(__dirname, 'resources/json/js');
            const filesMap = { 'jsconfig.json.js': '.' };
            for (const [fileName, path] of Object.entries(filesMap)) {
                const srcPath = (0, path_1.join)(jsJSONDir, fileName);
                const destPath = (0, path_1.join)(rootPath, path, 'jsconfig.json');
                const json = require(srcPath).default();
                await fs_extra_1.default.writeJSON(destPath, json, { spaces: 2 });
            }
        }
        // ensure node_modules is created
        await fs_extra_1.default.ensureDir((0, path_1.join)(rootPath, 'node_modules'));
        // create config/database
        await fs_extra_1.default.appendFile((0, path_1.join)(rootPath, '.env'), (0, database_1.generateDbEnvariables)({ client, connection }));
        await fs_extra_1.default.writeFile((0, path_1.join)(rootPath, `config/database.${language}`), (0, database_1.createDatabaseConfig)({ useTypescript }));
        await (0, usage_1.trackUsage)({ event: 'didCopyConfigurationFiles', scope });
        // merge template files if a template is specified
        const hasTemplate = Boolean(scope.template);
        if (hasTemplate) {
            try {
                await (0, merge_template_js_1.default)(scope, rootPath);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`⛔️ Template installation failed: ${error.message}`);
                }
                throw error;
            }
        }
    }
    catch (err) {
        await fs_extra_1.default.remove(scope.rootPath);
        throw err;
    }
    await (0, usage_1.trackUsage)({ event: 'willInstallProjectDependencies', scope });
    const installPrefix = chalk_1.default.yellow('Installing dependencies:');
    const loader = (0, ora_1.default)(installPrefix).start();
    const logInstall = (chunk = '') => {
        loader.text = `${installPrefix} ${chunk.toString().split('\n').join(' ')}`;
    };
    try {
        if (scope.installDependencies !== false) {
            const runner = runInstall(scope);
            runner.stdout?.on('data', logInstall);
            runner.stderr?.on('data', logInstall);
            await runner;
        }
        loader.stop();
        console.log(`Dependencies installed ${chalk_1.default.green('successfully')}.`);
        await (0, usage_1.trackUsage)({ event: 'didInstallProjectDependencies', scope });
    }
    catch (error) {
        const stderr = (0, types_1.isStderrError)(error) ? error.stderr : '';
        loader.stop();
        await (0, usage_1.trackUsage)({
            event: 'didNotInstallProjectDependencies',
            scope,
            error: stderr.slice(-1024),
        });
        console.error(`${chalk_1.default.red('Error')} while installing dependencies:`);
        console.error(stderr);
        await (0, usage_1.captureStderr)('didNotInstallProjectDependencies', error);
        console.log(chalk_1.default.black.bgWhite(' Keep trying!'));
        console.log();
        console.log(chalk_1.default.bold('Oh, it seems that you encountered errors while installing dependencies in your project.'));
        console.log(`Don't give up, your project was created correctly.`);
        console.log(`Fix the issues mentioned in the installation errors and try to run the following command:`);
        console.log();
        console.log(`cd ${chalk_1.default.green(rootPath)} && ${chalk_1.default.cyan(scope.useYarn ? 'yarn' : 'npm')} install`);
        console.log();
        (0, stop_process_1.default)();
    }
    await (0, usage_1.trackUsage)({ event: 'didCreateProject', scope });
    // Init git
    if (await (0, git_1.default)(rootPath)) {
        console.log('Initialized a git repository.');
        console.log();
    }
    console.log();
    console.log(`Your application was created at ${chalk_1.default.green(rootPath)}.\n`);
    const cmd = chalk_1.default.cyan(scope.useYarn ? 'yarn' : 'npm run');
    console.log('Available commands in your project:');
    console.log();
    console.log(`  ${cmd} develop`);
    console.log('  Start Strapi in watch mode. (Changes in Strapi project files will trigger a server restart)');
    console.log();
    console.log(`  ${cmd} start`);
    console.log('  Start Strapi without watch mode.');
    console.log();
    console.log(`  ${cmd} build`);
    console.log('  Build Strapi admin panel.');
    console.log();
    console.log(`  ${cmd} strapi`);
    console.log(`  Display all available commands.`);
    console.log();
    console.log('You can start by doing:');
    console.log();
    console.log(`  ${chalk_1.default.cyan('cd')} ${rootPath}`);
    console.log(`  ${cmd} develop`);
    console.log();
}
exports.default = createProject;
const installArguments = ['install', '--production', '--no-optional'];
function runInstall({ rootPath, useYarn }) {
    if (useYarn) {
        // Increase timeout for slow internet connections.
        installArguments.push('--network-timeout 1000000');
        return (0, execa_1.default)('yarnpkg', installArguments, {
            cwd: rootPath,
            stdin: 'ignore',
        });
    }
    return (0, execa_1.default)('npm', installArguments, { cwd: rootPath, stdin: 'ignore' });
}
//# sourceMappingURL=create-project.js.map