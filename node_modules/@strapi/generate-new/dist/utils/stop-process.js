"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stopProcess(message) {
    if (message) {
        console.error(message);
    }
    process.exit(1);
}
exports.default = stopProcess;
//# sourceMappingURL=stop-process.js.map