"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Client
 */
exports.default = ({ client }) => {
    switch (client) {
        case 'sqlite-legacy':
            return 'sqlite';
        default:
            return client;
    }
};
//# sourceMappingURL=db-client-name.js.map