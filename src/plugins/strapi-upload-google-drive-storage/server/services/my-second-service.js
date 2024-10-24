"use strict";

module.exports = ({ strapi }) => ({
  getWelcomeSecondMessage() {
    return "Welcome to Second Service 🚀";
  },
  async find(query) {
    return await strapi.entityService.findMany(
      "plugin::strapi-upload-google-drive-storage.elif",
      query
    );
  },
});
