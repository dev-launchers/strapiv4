"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
exports.default = (...levels) => {
    return (0, winston_1.format)((info) => (levels.some((level) => info.level.includes(level)) ? info : false))();
};
//# sourceMappingURL=level-filter.js.map