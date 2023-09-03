"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatYupErrors = void 0;
const fp_1 = require("lodash/fp");
const formatYupInnerError = (yupError) => ({
    path: (0, fp_1.toPath)(yupError.path),
    message: yupError.message,
    name: yupError.name,
});
const formatYupErrors = (yupError) => ({
    errors: (0, fp_1.isEmpty)(yupError.inner)
        ? [formatYupInnerError(yupError)]
        : yupError.inner.map(formatYupInnerError),
    message: yupError.message,
});
exports.formatYupErrors = formatYupErrors;
//# sourceMappingURL=format-yup-error.js.map