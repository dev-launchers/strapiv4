"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visitor = ({ key, attribute }, { remove }) => {
    if (attribute?.type === 'password') {
        remove(key);
    }
};
exports.default = visitor;
//# sourceMappingURL=remove-password.js.map