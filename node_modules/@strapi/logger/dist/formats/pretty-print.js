"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const log_errors_1 = __importDefault(require("./log-errors"));
const defaultTimestampFormat = 'YYYY-MM-DD HH:mm:ss.SSS';
/**
 * Create a pretty print formatter for a winston logger
 * @param options
 */
exports.default = (options = {}) => {
    const { timestamps = true, colors = true } = options;
    const handlers = [];
    if (timestamps) {
        handlers.push(winston_1.format.timestamp({
            format: timestamps === true ? defaultTimestampFormat : timestamps,
        }));
    }
    if (colors) {
        handlers.push(winston_1.format.colorize());
    }
    handlers.push((0, log_errors_1.default)());
    handlers.push(winston_1.format.printf(({ level, message, timestamp }) => {
        return `${timestamps ? `[${timestamp}] ` : ''}${level}: ${message}`;
    }));
    return winston_1.format.combine(...handlers);
};
//# sourceMappingURL=pretty-print.js.map