'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('googledrive')
      .service('welcomeService')
      .getWelcomeMessage();
  },
});
