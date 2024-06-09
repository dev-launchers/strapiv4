const readWrite = {
  find: { enabled: true, policy: "" },
  findOne: { enabled: true, policy: "" },
  create: { enabled: true, policy: "" },
  update: { enabled: true, policy: "" },
  delete: { enabled: true, policy: "" },
}
const readOnly = {
  find: { enabled: true, policy: "" },
  findOne: { enabled: true, policy: "" },
}

module.exports = {
  name: "Authenticated",
  description: "Default role given to authenticated user.",
  permissions: {
    "api::applicant": {
      controllers: {
        applicant: readWrite,
      },
    },
    "api::category": {
      controllers: {
        category: readWrite,
      },
    },
    "api::comment": {
      controllers: {
        comment: readWrite,
      },
    },
    "api::event": {
      controllers: {
        event: readOnly,
      },
    },
    "api::idea-card": {
      controllers: {
        "idea-card": readWrite,
      },
    },
    "api::interest": {
      controllers: {
        interest: readOnly,
      },
    },
    "api::like": {
      controllers: {
        like: readWrite,
      },
    },
    "api::notification": {
      controllers: {
        notification: readWrite,
      },
    },
    "api::opportunity": {
      controllers: {
        opportunity: readOnly,
      },
    },
    "api::point": {
      controllers: {
        point: readWrite,
      },
    },
    "api::profile": {
      controllers: {
        profile: readWrite,
      },
    },
    "api::project": {
      controllers: {
        project: readOnly,
      },
    },
    "api::subscription": {
      controllers: {
        subscription: readOnly,
      },
    },
    "plugin::users-permissions": {
      controllers: {
        auth: {
          callback: { enabled: true, policy: "" },
          connect: { enabled: true, policy: "" },
          emailConfirmation: { enabled: true, policy: "" },
          forgotPassword: { enabled: true, policy: "" },
          resetPassword: { enabled: true, policy: "" },
          register: { enabled: true, policy: "" },
          logout: { enabled: true, policy: "" },
        },
        user: {
          count: { enabled: true, policy: "" },
          create: { enabled: true, policy: "" },
          findOne: { enabled: true, policy: "" },
          find: { enabled: true, policy: "" },
          me: { enabled: true, policy: "" },
          update: { enabled: true, policy: "" },
        },
      },
    },
  },
};
