const readWrite = {
  find: { enabled: true, policy: "" },
  findOne: { enabled: true, policy: "" },
  create: { enabled: true, policy: "" },
  update: { enabled: true, policy: "" },
  delete: { enabled: true, policy: "" },
};

const readOnly = {
  find: { enabled: true, policy: "" },
  findOne: { enabled: true, policy: "" },
};


const authenticatedRolePermissions = {
  name: "Authenticated",
  description: "Default role given to authenticated user.",
  permissions: {
    "api::idea-card": {
      controllers: {
        "idea-card": readWrite,
      },
    },
    "api::comment": {
      controllers: {
        comment: readWrite,
      },
    },
    "api::interest": {
      controllers: {
        interest: readWrite,
      },
    },
    "api::project": {
      controllers: {
        project: readOnly,
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
