"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStderrError = void 0;
function isStderrError(error) {
    return (typeof error === 'object' &&
        error !== null &&
        'stderr' in error &&
        typeof error.stderr === 'string');
}
exports.isStderrError = isStderrError;
//# sourceMappingURL=types.js.map