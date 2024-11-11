'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-provider-upload-google-storage')
      .service('myService')
      .getWelcomeMessage();
  },
});
