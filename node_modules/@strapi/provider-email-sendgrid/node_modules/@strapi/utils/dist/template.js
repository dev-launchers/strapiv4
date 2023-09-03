"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLooseInterpolationRegExp = exports.createStrictInterpolationRegExp = void 0;
/**
 * Create a strict interpolation RegExp based on the given variables' name
 */
const createStrictInterpolationRegExp = (allowedVariableNames, flags) => {
    const oneOfVariables = allowedVariableNames.join('|');
    // 1. We need to match the delimiters: <%= ... %>
    // 2. We accept any number of whitespaces characters before and/or after the variable name: \s* ... \s*
    // 3. We only accept values from the variable list as interpolation variables' name: : (${oneOfVariables})
    return new RegExp(`<%=\\s*(${oneOfVariables})\\s*%>`, flags);
};
exports.createStrictInterpolationRegExp = createStrictInterpolationRegExp;
/**
 * Create a loose interpolation RegExp to match as many groups as possible
 */
const createLooseInterpolationRegExp = (flags) => new RegExp(/<%=([\s\S]+?)%>/, flags);
exports.createLooseInterpolationRegExp = createLooseInterpolationRegExp;
//# sourceMappingURL=template.js.map