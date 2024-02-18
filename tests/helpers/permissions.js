const authenticatedRolePermissions = {
  name: "Authenticated",
  description: "Default role given to authenticated user.",
  permissions: {
    "api::idea-card": {
      controllers: {
        "idea-card": {
          find: { enabled: true, policy: "" },
          findOne: { enabled: true, policy: "" },
          create: { enabled: true, policy: "" },
          update: { enabled: true, policy: "" },
          delete: { enabled: true, policy: "" },
        },
      },
    },
    "api::comment": {
      controllers: {
        comment: {
          find: { enabled: true, policy: "" },
          findOne: { enabled: true, policy: "" },
          create: { enabled: true, policy: "" },
          update: { enabled: true, policy: "" },
          delete: { enabled: true, policy: "" },
        },
      },
    },
    "api::interest": {
      controllers: {
        interest: {
          find: { enabled: true, policy: "" },
          findOne: { enabled: true, policy: "" },
          create: { enabled: true, policy: "" },
          update: { enabled: true, policy: "" },
          delete: { enabled: true, policy: "" },
        },
      },
    },
    "plugin::users-permissions": {
      controllers: {
        user: {
          count: { enabled: true, policy: "" },
          findOne: { enabled: true, policy: "" },
          create: { enabled: true, policy: "" },
          update: { enabled: true, policy: "" },
          me: { enabled: true, policy: "" },
        },
      },
    },
  },
};
module.exports = { authenticatedRolePermissions };
