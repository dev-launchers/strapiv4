"use strict";
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/getall",
      handler: "controller.getall",
      config: {
        auth: false,
        //controllers: ["api::applicant.controller"],
      },
    },
    {
      method: "POST",
      path: "/uploadf",
      handler: "controller.uploadf",
      config: {
        auth: false,
        //controllers: ["api::applicant.controller"],
      },
    },
  ],
};
