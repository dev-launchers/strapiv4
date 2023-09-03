"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const audit_log_1 = __importDefault(require("./content-types/audit-log"));
module.exports = {
    async register({ strapi }) {
        const contentTypes = strapi.container.get('content-types');
        if (!contentTypes.keys().includes('admin::audit-log')) {
            strapi.container.get('content-types').add('admin::', { 'audit-log': audit_log_1.default });
        }
        // Return the provider object
        return {
            async saveEvent(event) {
                const { userId, ...rest } = event;
                const auditLog = { ...rest, user: userId };
                // Save to database
                await strapi.entityService.create('admin::audit-log', { data: auditLog });
                return this;
            },
            findMany(query) {
                return strapi.entityService.findPage('admin::audit-log', {
                    populate: ['user'],
                    fields: ['action', 'date', 'payload'],
                    ...query,
                });
            },
            findOne(id) {
                return strapi.entityService.findOne('admin::audit-log', id, {
                    populate: ['user'],
                    fields: ['action', 'date', 'payload'],
                });
            },
            deleteExpiredEvents(expirationDate) {
                return strapi.entityService.deleteMany('admin::audit-log', {
                    filters: {
                        date: {
                            $lt: expirationDate.toISOString(),
                        },
                    },
                });
            },
        };
    },
};
//# sourceMappingURL=index.js.map