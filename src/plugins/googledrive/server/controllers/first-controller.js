'use strict';

module.exports = ({ strapi }) => ({
  getall: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin('googledrive')
        .service('firstService')
        .getall();
    } catch (err) {
      ctx.throw(523, err);
    }
  },
  //
  upload: async (ctx) => {
    try {
      console.log('upload at line 23');
      ctx.body = await strapi
        .plugin('googledrive')
        .service('firstService')
        .upload(ctx);
    } catch (err) {
      ctx.throw(523, err);
    }
  },
  delete: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin('googledrive')
        .service('firstService')
        .deleteFile(ctx);
    } catch (err) {
      ctx.throw(528, err);
    }
  },
});
