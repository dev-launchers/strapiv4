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

  async delete(id) {
    return await strapi.entityService.delete(
      "plugin::strapi-upload-google-drive-storage.elif",
      id
    );
  },

  async create(data) {
    return await strapi.entityService.create(
      "plugin::strapi-upload-google-drive-storage.elif",
      data
    );
  },
});
