"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEVELS = exports.LEVEL_LABEL = exports.LEVEL = void 0;
const winston_1 = require("winston");
const LEVELS = winston_1.config.npm.levels;
exports.LEVELS = LEVELS;
const LEVEL_LABEL = 'silly';
exports.LEVEL_LABEL = LEVEL_LABEL;
const LEVEL = LEVELS[LEVEL_LABEL];
exports.LEVEL = LEVEL;
//# sourceMappingURL=constants.js.map