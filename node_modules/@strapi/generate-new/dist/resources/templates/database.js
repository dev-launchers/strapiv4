"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDbEnvariables = exports.createDatabaseConfig = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const lodash_1 = __importDefault(require("lodash"));
const createDatabaseConfig = ({ useTypescript }) => {
    const language = useTypescript ? 'ts' : 'js';
    const tmpl = fs_1.default.readFileSync(path_1.default.join(__dirname, 'database-templates', language, `database.template`));
    const compile = lodash_1.default.template(tmpl.toString());
    return compile();
};
exports.createDatabaseConfig = createDatabaseConfig;
const generateDbEnvariables = ({ connection, client, }) => {
    const tmpl = fs_1.default.readFileSync(path_1.default.join(__dirname, 'database-templates', `${client}.template`));
    const compile = lodash_1.default.template(tmpl.toString());
    return compile({
        client,
        connection: {
            ...connection.connection,
            ssl: connection.connection.ssl || false,
        },
    });
};
exports.generateDbEnvariables = generateDbEnvariables;
//# sourceMappingURL=database.js.map