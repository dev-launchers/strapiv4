"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (destination) => {
    if (destination === 'api') {
        return `api/{{ api }}`;
    }
    if (destination === 'plugin') {
        return `plugins/{{ plugin }}/server`;
    }
    if (destination === 'root') {
        return './';
    }
    return `api/{{ id }}`;
};
//# sourceMappingURL=get-file-path.js.map