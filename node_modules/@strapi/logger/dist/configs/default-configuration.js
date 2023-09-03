"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const constants_1 = require("../constants");
const formats_1 = require("../formats");
exports.default = () => {
    return {
        level: constants_1.LEVEL_LABEL,
        levels: constants_1.LEVELS,
        format: (0, formats_1.prettyPrint)(),
        transports: [new winston_1.transports.Console()],
    };
};
//# sourceMappingURL=default-configuration.js.map