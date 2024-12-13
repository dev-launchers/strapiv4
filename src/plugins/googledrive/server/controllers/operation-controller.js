'use strict';

module.exports = ({ strapi }) => ({
  get: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin('googledrive')
        .service('operationService')
        .get(ctx);
    } catch (err) {
      console.log(err);
      ctx.throw(500, 'File Not found');
      return { 500: 'File Not found' };
    }
  },
  upload: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin('googledrive')
        .service('operationService')
        .upload(ctx);
    } catch (err) {
      console.log(err);
      ctx.throw(500, 'Failed to upload the file');
      return { 500: 'Failed to upload the file' };
    }
  },
  delete: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin('googledrive')
        .service('operationService')
        .deleteFile(ctx);
    } catch (err) {
      console.log(err);
      ctx.throw(500, 'Failed to delete the file');
      return { 500: 'Failed to delete the file' };
    }
  },
});
