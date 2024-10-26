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
      path: "/upload",
      handler: "controller.upload",
      config: {
        auth: false,
        //controllers: ["api::applicant.controller"],
      },
    },
    {
      method: "DELETE",
      path: "/delete",
      handler: "controller.delete",
      config: {
        auth: false,
        //controllers: ["api::applicant.controller"],
      },
    },
  ],
};
