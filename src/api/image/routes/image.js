'use strict';

/**
 * image router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// Standard CRUD routes
module.exports = createCoreRouter('api::image.image');
