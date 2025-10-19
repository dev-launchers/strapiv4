'use strict';

/**
 * domain controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::domain.domain');
