'use strict';

/**
 * comment router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::comment.comment', {
  config: {
    update: {
      policies: ['api::comment.comment-owner-filter'],
    },
    delete: {
      policies: ['api::comment.comment-owner-filter'],
    },
  },
});
