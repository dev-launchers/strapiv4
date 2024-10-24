'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-upload-google-drive-storage')
      .service('myService')
      .getWelcomeMessage();
  },
});
