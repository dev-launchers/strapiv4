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
  ],
};
