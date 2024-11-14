"use strict";

module.exports = ({ strapi }) => ({
  getSecondWelcomeMessage(ctx) {
    ctx.body = strapi
      .plugin("googledriveupload")
      .service("firstService")
      .getSecondWelcomeMessage();
  },
  getall: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin("googledriveupload")
        .service("firstService")
        .getall();
    } catch (err) {
      ctx.throw(523, "getall Error");
    }
  },
  //
  upload: async (ctx) => {
    try {
      console.log("upload at line 23");
      ctx.body = await strapi
        .plugin("googledriveupload")
        .service("firstService")
        .upload(ctx);
    } catch (err) {
      ctx.throw(523, '"error during upload');
    }
  },
  delete: async (ctx) => {
    try {
      ctx.body = await strapi
        .plugin("googledriveupload")
        .service("firstService")
        .deleteFile(ctx);
    } catch (err) {
      ctx.throw(528, '"error during delete');
    }
  },
});
