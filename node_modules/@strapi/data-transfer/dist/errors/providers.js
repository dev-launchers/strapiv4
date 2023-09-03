"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderTransferError = exports.ProviderValidationError = exports.ProviderInitializationError = exports.ProviderError = void 0;
const base_1 = require("./base");
const constants_1 = require("./constants");
class ProviderError extends base_1.DataTransferError {
    constructor(severity, message, details) {
        super('provider', severity, message, details);
    }
}
exports.ProviderError = ProviderError;
class ProviderInitializationError extends ProviderError {
    constructor(message) {
        super(constants_1.SeverityKind.FATAL, message, { step: 'initialization' });
    }
}
exports.ProviderInitializationError = ProviderInitializationError;
// TODO: these types are not working correctly, ProviderTransferError() is accepting any details object rather than requiring T
class ProviderValidationError extends ProviderError {
    constructor(message, details) {
        super(constants_1.SeverityKind.SILLY, message, { step: 'validation', details });
    }
}
exports.ProviderValidationError = ProviderValidationError;
// TODO: these types are not working correctly, ProviderTransferError() is accepting any details object rather than requiring T
class ProviderTransferError extends ProviderError {
    constructor(message, details) {
        super(constants_1.SeverityKind.FATAL, message, { step: 'transfer', details });
    }
}
exports.ProviderTransferError = ProviderTransferError;
//# sourceMappingURL=providers.js.map