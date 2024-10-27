"use strict";
const myList = require("strapiv4-provider-to-google-drive");
const { createCoreController } = require("@strapi/strapi").factories;
const modelUid = "api::applicant.applicant";
module.exports = createCoreController(
  modelUid,

  ({ strapi }) => ({
    upload: async (ctx) => {
      try {
        const myall = myList.upload(ctx);
        console.table(myall);
        return myall;
      } catch (err) {
        ctx.throw(555, err);
      }
    },
    getall: async (ctx) => {
      try {
        const myall = myList.getAll();
        return myall;
      } catch (err) {
        ctx.throw(555, err);
      }
    },
    delete: async (ctx) => {
      try {
        const myall = myList.deleteFile(ctx);
        return myall;
      } catch (err) {
        ctx.throw(555, err);
      }
    },
  })
);
