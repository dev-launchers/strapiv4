module.exports = [
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
    path: "/myMessage",
    handler: "mySecondController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/find",
    handler: "mySecondController.find",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/create",
    handler: "mySecondController.create",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "mySecondController.delete",
    config: {
      policies: [],
      auth: false,
    },
  },
];
