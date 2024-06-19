"use strict";

const { type } = require("os");

/**
 *  idea-card controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::idea-card.idea-card",
  ({ strapi }) => ({
    async findOne(ctx) {
      if (isNaN(ctx.params.id)) {
        return ctx.badRequest("Id should be a number");
      }
      return await super.findOne(ctx);
    },
  })
);
