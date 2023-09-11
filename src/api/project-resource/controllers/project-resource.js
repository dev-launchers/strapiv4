"use strict";

/**
 * project-resource controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::project-resource.project-resource",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entries = await strapi.db
        .query("api::project-resource.project-resource")
        .findMany({
          where: {
            project: {
              team: {
                $or: [
                  {
                    leaders: {
                      leader: {
                        id: id,
                      },
                    },
                  },
                  {
                    members: {
                      member: {
                        id: id,
                      },
                    },
                  },
                ],
              },
            },
          },
          populate: [
            "project.team.leaders.leader.profile",
            "project.team.members.member.profile",
            "project.heroImage",
          ],
        });

      return entries;
    },
  })
);
