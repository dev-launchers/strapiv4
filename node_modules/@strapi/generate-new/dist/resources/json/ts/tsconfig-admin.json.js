"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    extends: '@strapi/typescript-utils/tsconfigs/admin',
    include: ['../plugins/**/admin/src/**/*', './'],
    exclude: ['node_modules/', 'build/', 'dist/', '**/*.test.ts'],
});
//# sourceMappingURL=tsconfig-admin.json.js.map