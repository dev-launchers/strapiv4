"use strict";
const path = require("path");
const process = require("process");
const myList = require("strapiv4-provider-to-google-drive");
const { createCoreController } = require("@strapi/strapi").factories;
const modelUid = "api::applicant.applicant";
module.exports = createCoreController(
  modelUid,

  ({ strapi }) => ({
    uploadf: async (ctx) => {
      const SERVICE_ACCOUNT_PATH = path.join(
        process.cwd(),
        "service_account.json"
      );
      console.log(SERVICE_ACCOUNT_PATH);

      try {
        const myall = myList.upload(ctx, SERVICE_ACCOUNT_PATH);
        console.table(myall);
        return myall;
        // ctx.response.data = myall;
        // ctx.response.status = 200;
        // ctx.response.message = "Google Upload Response Success";
      } catch (err) {
        ctx.throw(555, err);
      }
    },
    getall: async (ctx) => {
      const SERVICE_ACCOUNT_PATH = path.join(
        process.cwd(),
        "service_account.json"
      );
      console.log(SERVICE_ACCOUNT_PATH);

      try {
        const myall = myList.getAll(SERVICE_ACCOUNT_PATH);
        console.table(myall);
        return myall;
        // ctx.response.data = myall;
        // ctx.response.status = 200;
        // ctx.response.message = "Google Upload Response Success";
      } catch (err) {
        ctx.throw(555, err);
      }
    },
  })
);
