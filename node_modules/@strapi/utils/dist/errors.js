"use strict";
/* eslint-disable max-classes-per-file */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotImplementedError = exports.PolicyError = exports.PayloadTooLargeError = exports.RateLimitError = exports.UnauthorizedError = exports.ForbiddenError = exports.NotFoundError = exports.PaginationError = exports.YupValidationError = exports.ValidationError = exports.ApplicationError = exports.HttpError = void 0;
const http_errors_1 = require("http-errors");
Object.defineProperty(exports, "HttpError", { enumerable: true, get: function () { return http_errors_1.HttpError; } });
const format_yup_error_1 = require("./format-yup-error");
/* ApplicationError */
class ApplicationError extends Error {
    constructor(message = 'An application error occured', details = {}) {
        super();
        this.name = 'ApplicationError';
        this.message = message;
        this.details = details;
    }
}
exports.ApplicationError = ApplicationError;
class ValidationError extends ApplicationError {
    constructor(message = 'Validation error', details) {
        super(message, details);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
class YupValidationError extends ValidationError {
    constructor(yupError, message) {
        super('Validation');
        const { errors, message: yupMessage } = (0, format_yup_error_1.formatYupErrors)(yupError);
        this.message = message || yupMessage;
        this.details = { errors };
    }
}
exports.YupValidationError = YupValidationError;
class PaginationError extends ApplicationError {
    constructor(message = 'Invalid pagination', details) {
        super(message, details);
        this.name = 'PaginationError';
        this.message = message;
    }
}
exports.PaginationError = PaginationError;
class NotFoundError extends ApplicationError {
    constructor(message = 'Entity not found', details) {
        super(message, details);
        this.name = 'NotFoundError';
        this.message = message;
    }
}
exports.NotFoundError = NotFoundError;
class ForbiddenError extends ApplicationError {
    constructor(message = 'Forbidden access', details) {
        super(message, details);
        this.name = 'ForbiddenError';
        this.message = message;
    }
}
exports.ForbiddenError = ForbiddenError;
class UnauthorizedError extends ApplicationError {
    constructor(message = 'Unauthorized', details) {
        super(message, details);
        this.name = 'UnauthorizedError';
        this.message = message;
    }
}
exports.UnauthorizedError = UnauthorizedError;
class RateLimitError extends ApplicationError {
    constructor(message = 'Too many requests, please try again later.', details) {
        super(message, details);
        this.name = 'RateLimitError';
        this.message = message;
        this.details = details || {};
    }
}
exports.RateLimitError = RateLimitError;
class PayloadTooLargeError extends ApplicationError {
    constructor(message = 'Entity too large', details) {
        super(message, details);
        this.name = 'PayloadTooLargeError';
        this.message = message;
    }
}
exports.PayloadTooLargeError = PayloadTooLargeError;
class PolicyError extends ForbiddenError {
    constructor(message = 'Policy Failed', details) {
        super(message, details);
        this.name = 'PolicyError';
        this.message = message;
        this.details = details || {};
    }
}
exports.PolicyError = PolicyError;
class NotImplementedError extends ApplicationError {
    constructor(message = 'This feature is not implemented yet', details) {
        super(message, details);
        this.name = 'NotImplementedError';
        this.message = message;
    }
}
exports.NotImplementedError = NotImplementedError;
//# sourceMappingURL=errors.js.map