"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (date = new Date()) => {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toJSON()
        .replace(/[-:]/g, '.')
        .replace(/\....Z/, '');
};
//# sourceMappingURL=get-formatted-date.js.map