"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferError = void 0;
class DataTransferError extends Error {
    constructor(origin, severity, message, details) {
        super(message);
        this.origin = origin;
        this.severity = severity;
        this.details = details ?? null;
    }
}
exports.DataTransferError = DataTransferError;
//# sourceMappingURL=base.js.map