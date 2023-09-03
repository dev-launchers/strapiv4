"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferEngineTransferError = exports.TransferEngineValidationError = exports.TransferEngineInitializationError = exports.TransferEngineError = void 0;
const errors_1 = require("../errors");
class TransferEngineError extends errors_1.DataTransferError {
    constructor(severity, message, details) {
        super('engine', severity, message, details);
    }
}
exports.TransferEngineError = TransferEngineError;
class TransferEngineInitializationError extends TransferEngineError {
    constructor(message) {
        super(errors_1.SeverityKind.FATAL, message, { step: 'initialization' });
    }
}
exports.TransferEngineInitializationError = TransferEngineInitializationError;
class TransferEngineValidationError extends TransferEngineError {
    constructor(message, details) {
        super(errors_1.SeverityKind.FATAL, message, { step: 'validation', details });
    }
}
exports.TransferEngineValidationError = TransferEngineValidationError;
class TransferEngineTransferError extends TransferEngineError {
    constructor(message, details) {
        super(errors_1.SeverityKind.FATAL, message, { step: 'transfer', details });
    }
}
exports.TransferEngineTransferError = TransferEngineTransferError;
//# sourceMappingURL=errors.js.map