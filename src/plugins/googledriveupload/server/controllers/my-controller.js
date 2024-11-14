"use strict";

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("googledriveupload")
      .service("myService")
      .getWelcomeMessage();
  },
});
