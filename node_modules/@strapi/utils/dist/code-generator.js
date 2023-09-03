"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTimestampCode = void 0;
// Using timestamp (milliseconds) to be sure it is unique
// + converting timestamp to base 36 for better readibility
const generateTimestampCode = (date) => {
    const referDate = date || new Date();
    return referDate.getTime().toString(36);
};
exports.generateTimestampCode = generateTimestampCode;
//# sourceMappingURL=code-generator.js.map