"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewApp = exports.checkInstallPath = void 0;
const node_path_1 = require("node:path");
const node_fs_1 = require("node:fs");
const node_os_1 = __importDefault(require("node:os"));
const node_readline_1 = __importDefault(require("node:readline"));
const crypto_1 = __importDefault(require("crypto"));
const sentry = __importStar(require("@sentry/node"));
const has_yarn_1 = __importDefault(require("./utils/has-yarn"));
const check_requirements_1 = __importDefault(require("./utils/check-requirements"));
const usage_1 = require("./utils/usage");
const parse_db_arguments_1 = __importDefault(require("./utils/parse-db-arguments"));
const generate_new_1 = __importDefault(require("./generate-new"));
const machine_id_1 = __importDefault(require("./utils/machine-id"));
var check_install_path_1 = require("./utils/check-install-path");
Object.defineProperty(exports, "checkInstallPath", { enumerable: true, get: function () { return __importDefault(check_install_path_1).default; } });
const packageJson = JSON.parse((0, node_fs_1.readFileSync)((0, node_path_1.resolve)(__dirname, '../package.json'), 'utf8'));
const generateNewApp = (projectDirectory, options) => {
    sentry.init({
        dsn: 'https://841d2b2c9b4d4b43a4cde92794cb705a@sentry.io/1762059',
    });
    (0, check_requirements_1.default)();
    const rootPath = (0, node_path_1.resolve)(projectDirectory);
    const tmpPath = (0, node_path_1.join)(node_os_1.default.tmpdir(), `strapi${crypto_1.default.randomBytes(6).toString('hex')}`);
    const useNpm = options.useNpm !== undefined;
    const scope = {
        rootPath,
        name: (0, node_path_1.basename)(rootPath),
        // disable quickstart run app after creation
        runQuickstartApp: options.run !== false,
        // use pacakge version as strapiVersion (all packages have the same version);
        strapiVersion: packageJson.version,
        debug: options.debug !== undefined,
        quick: options.quickstart,
        template: options.template,
        packageJsonStrapi: {
            template: options.template,
            starter: options.starter,
        },
        uuid: (process.env.STRAPI_UUID_PREFIX || '') + crypto_1.default.randomUUID(),
        docker: process.env.DOCKER === 'true',
        deviceId: (0, machine_id_1.default)(),
        tmpPath,
        // use yarn if available and --use-npm isn't true
        useYarn: !useNpm && (0, has_yarn_1.default)(),
        installDependencies: true,
        strapiDependencies: [
            '@strapi/strapi',
            '@strapi/plugin-users-permissions',
            '@strapi/plugin-i18n',
        ],
        additionalsDependencies: {},
        useTypescript: Boolean(options.typescript),
    };
    sentry.configureScope(function configureScope(sentryScope) {
        const tags = {
            os: node_os_1.default.type(),
            osPlatform: node_os_1.default.platform(),
            osArch: node_os_1.default.arch(),
            osRelease: node_os_1.default.release(),
            version: scope.strapiVersion,
            nodeVersion: process.versions.node,
            docker: scope.docker,
        };
        Object.keys(tags).forEach((tag) => {
            sentryScope.setTag(tag, tags[tag]);
        });
    });
    (0, parse_db_arguments_1.default)({ scope, args: options });
    initCancelCatcher();
    return (0, generate_new_1.default)(scope).catch((error) => {
        console.error(error);
        return (0, usage_1.captureException)(error).then(() => {
            return (0, usage_1.trackError)({ scope, error }).then(() => {
                process.exit(1);
            });
        });
    });
};
exports.generateNewApp = generateNewApp;
function initCancelCatcher() {
    // Create interface for windows user to let them quit the program.
    if (process.platform === 'win32') {
        const rl = node_readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.on('SIGINT', function sigint() {
            process.emit('SIGINT');
        });
    }
    process.on('SIGINT', () => {
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map