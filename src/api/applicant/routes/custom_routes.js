"use strict";
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/v1-list-files",
      handler: "list-controller.listFiles",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/v2-upload-file",
      handler: "upload-controller.googleDriveUploadPortfolios",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/v1-delete-file",
      handler: "file-delete.deleteFile",

      config: {
        policies: [],
      },
    },

    {
      method: "GET",
      path: "/v1-get-authorisation",
      handler: "authorisation-controller.getAuthorisation",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/v1-get-upload",
      handler: "custom-controller.googleUploadApplicantPortfolios",
      config: {
        policies: [],
      },
    },
  ],
};
