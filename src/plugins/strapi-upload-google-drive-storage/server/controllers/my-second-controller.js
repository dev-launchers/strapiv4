"use strict";

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("strapi-upload-google-drive-storage")
      .service("mySecondService")
      .getWelcomeSecondMessage();
  },
  async find(ctx) {
    try {
      return await strapi
        .plugin("strapi-upload-google-drive-storage")
        //.service("elif")
        .service("mySecondService")
        .find(ctx.query);
    } catch (err) {
      ctx.throw(510, err);
    }
  },
});
