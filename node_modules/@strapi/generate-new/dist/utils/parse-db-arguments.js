"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const stop_process_1 = __importDefault(require("./stop-process"));
const DB_ARGS = ['dbclient', 'dbhost', 'dbport', 'dbname', 'dbusername', 'dbpassword'];
const VALID_CLIENTS = ['sqlite', 'mysql', 'postgres'];
function parseDatabaseArguments({ scope, args }) {
    const argKeys = Object.keys(args);
    const matchingArgs = DB_ARGS.filter((key) => argKeys.includes(key));
    const missingArgs = DB_ARGS.filter((key) => !argKeys.includes(key));
    if (matchingArgs.length === 0)
        return;
    if (matchingArgs.length !== DB_ARGS.length && args.dbclient !== 'sqlite') {
        return (0, stop_process_1.default)(`Required database arguments are missing: ${missingArgs.join(', ')}.`);
    }
    if (!args.dbclient || !VALID_CLIENTS.includes(args.dbclient)) {
        return (0, stop_process_1.default)(`Invalid client ${chalk_1.default.yellow(args.dbclient)}. Possible choices: ${VALID_CLIENTS.join(', ')}.`);
    }
    scope.dbforce = args.dbforce !== undefined;
    const database = {
        client: args.dbclient,
        connection: {
            host: args.dbhost,
            port: args.dbport,
            database: args.dbname,
            username: args.dbusername,
            password: args.dbpassword,
            filename: args.dbfile,
        },
    };
    if (args.dbssl !== undefined) {
        database.connection.ssl = args.dbssl === 'true';
    }
    scope.database = database;
}
exports.default = parseDatabaseArguments;
//# sourceMappingURL=parse-db-arguments.js.map