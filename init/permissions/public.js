const initialize = {
  find: { enabled: true, policy: "" },
  create: { enabled: true, policy: "" },
}
const readOnly = {
  find: { enabled: true, policy: "" },
  findOne: { enabled: true, policy: "" },
}

module.exports = {
  name: "Public",
  description: "Default role given to unauthenticated user.",
  permissions: {
    "api::applicant": {
      controllers: {
        applicant: initialize,
      },
    },
    "api::comment": {
      controllers: {
        comment: readOnly,
      },
    },
    "api::idea-card": {
      controllers: {
        "idea-card": readOnly,
      },
    },
    "api::image": {
      controllers: {
        image: {
          ...readOnly,
          fetchFromPexels: { enabled: true, policy: "" },
          getByKeyword: { enabled: true, policy: "" },
        },
      },
    },
    "api::image-keyword-mapping": {
      controllers: {
        "image-keyword-mapping": readOnly,
      },
    },
    "api::interest": {
      controllers: {
        interest: readOnly,
      },
    },
    "api::newsletter": {
      controllers: {
        newsletter: initialize,
      },
    },
    "api::opportunity": {
      controllers: {
        opportunity: readOnly,
      },
    },
    "api::project": {
      controllers: {
        project: readOnly,
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
        },
        user: {
          count: { enabled: true, policy: "" },
          create: { enabled: true, policy: "" },
          me: { enabled: true, policy: "" },
        },
      },
    },
  },
};
