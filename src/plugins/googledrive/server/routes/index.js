'use strict';

module.exports = {
  admin: require('./admin'),
  //viewConfiguration: require('./view-configuration'),
  'content-api': require('./content-api'),
};
/* module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/getall",
    handler: "firstController.getall",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/upload",
    handler: "firstController.upload",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/delete",
    handler: "firstController.delete",
    config: {
      policies: [],
      auth: false,
    },
  },
];
*/
