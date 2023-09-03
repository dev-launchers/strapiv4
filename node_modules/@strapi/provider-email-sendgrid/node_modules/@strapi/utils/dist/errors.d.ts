import yup from 'yup';
import { HttpError } from 'http-errors';
declare class ApplicationError extends Error {
    details: unknown;
    constructor(message?: string, details?: unknown);
}
declare class ValidationError extends ApplicationError {
    constructor(message?: string, details?: unknown);
}
declare class YupValidationError extends ValidationError {
    constructor(yupError: yup.ValidationError, message?: string);
}
declare class PaginationError extends ApplicationError {
    constructor(message?: string, details?: unknown);
}
declare class NotFoundError extends ApplicationError {
    constructor(message?: string, details?: unknown);
}
declare class ForbiddenError extends ApplicationError {
    constructor(message?: string, details?: unknown);
}
declare class UnauthorizedError extends ApplicationError {
    constructor(message?: string, details?: unknown);
}
declare class RateLimitError extends ApplicationError {
    constructor(message?: string, details?: unknown);
}
declare class PayloadTooLargeError extends ApplicationError {
    constructor(message?: string, details?: unknown);
}
declare class PolicyError extends ForbiddenError {
    constructor(message?: string, details?: unknown);
}
declare class NotImplementedError extends ApplicationError {
    constructor(message?: string, details?: unknown);
}
export { HttpError, ApplicationError, ValidationError, YupValidationError, PaginationError, NotFoundError, ForbiddenError, UnauthorizedError, RateLimitError, PayloadTooLargeError, PolicyError, NotImplementedError, };
