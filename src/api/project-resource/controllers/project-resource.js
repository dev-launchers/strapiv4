"use strict";

/**
 * project-resource controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::project-resource.project-resource",
  ({ strapi }) => ({
    async find(ctx) {
      const { userId } = ctx.request.query;
      let entries = await strapi.db
        .query("api::project-resource.project-resource")
        .findMany({
          where: {
            project: {
              team: {
                $or: [
                  {
                    leaders: {
                      leader: {
                        id: userId,
                      },
                    },
                  },
                  {
                    members: {
                      member: {
                        id: userId,
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
            "mainResources",
            "otherResources",
          ],
        });

      entries = entries.map((entity) => {
        entity.project.team.leaders = entity.project.team.leaders.map(
          (leader) => ({
            id: leader.leader.id,
            username: leader.leader.username,
            profile: leader.leader.profile,
            email: leader.leader.email,
            role: leader.role,
          })
        );

        entity.project.team.members = entity.project.team.members.map(
          (member) => ({
            id: member.member.id,
            username: member.member.username,
            profile: member.member.profile,
            role: member.role,
          })
        );
        return entity;
      });

      return entries;
    },
  })
);
