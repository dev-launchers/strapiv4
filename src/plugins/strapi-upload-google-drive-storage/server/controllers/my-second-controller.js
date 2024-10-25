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
        .service("mySecondService")
        .find(ctx.query);
    } catch (err) {
      ctx.throw(510, err);
    }
  },
  async delete(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-upload-google-drive-storage")
        .service("mySecondService")
        .delete(ctx.params.id);
    } catch (err) {
      ctx.throw(502, err);
    }
  },

  async create(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-upload-google-drive-storage")
        .service("mySecondService")
        .create(ctx.request.body);
    } catch (err) {
      ctx.throw(503, err);
    }
  },
});
