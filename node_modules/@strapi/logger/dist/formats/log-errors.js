"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logErrors = (0, winston_1.format)((info) => {
    if (info instanceof Error) {
        return { ...info, message: `${info.message}${info.stack ? `\n${info.stack}` : ''}` };
    }
    return info;
});
exports.default = logErrors;
//# sourceMappingURL=log-errors.js.map