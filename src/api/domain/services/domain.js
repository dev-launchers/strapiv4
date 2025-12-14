'use strict';

/**
 * domain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::domain.domain');
