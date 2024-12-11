'use strict';

module.exports = ({ strapi }) => ({
  get: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin('googledrive')
        .service('operationService')
        .get(ctx);
    } catch (err) {
      ctx.throw(523, err);
      return err;
    }
  },
  upload: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin('googledrive')
        .service('operationService')
        .upload(ctx);
    } catch (err) {
      ctx.throw(525, err);
      return err;
    }
  },
  delete: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin('googledrive')
        .service('operationService')
        .deleteFile(ctx);
    } catch (err) {
      ctx.throw(526, err);
      return err;
    }
  },
});
