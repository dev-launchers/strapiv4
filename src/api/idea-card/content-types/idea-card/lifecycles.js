
module.exports = {
  async beforeCreate(event) {
    // Set author and ideaOwner to the user sending the request
    const ctx = strapi.requestContext.get();
    event.params.data.author = ctx.state.user;
    event.params.data.ideaOwner = ctx.state.user;

    const previousData = await strapi.db.query("api::idea-card.idea-card")
      .findOne({
        filters: { ideaName: { $eqi: event.params.data.ideaName } },
      });

      if (previousData?.id) {
        return ctx.badRequest('This attribute must be unique', { errors: [
          {
            message: 'This attribute must be unique',
            name: 'ValidationError',
            path: ['ideaName']
          }
        ] });
      }
  },

  async afterCreate(event) {
    const {
      id: id,
      ideaName: ideaName,
      createdAt: timeCreated,
      tagline: tagline,
      description: ideaDescription,
    } = event.result;

    const author = event.params.data.author.username;
    const ctx = strapi.requestContext.get();
    const user = ctx.state.user;

    await strapi.entityService.create("api::subscription.subscription", {
      data: {
        entityType: "IdeaCard",
        entityId: id,
        createdDateTime: new Date(),
        active: true,
        user: user,
      },
    });

    await strapi.entityService.create("api::event.event", {
      data: {
        action: "Idea Created",
        entityName: ideaName,
        content: ideaDescription,
        entityType: "IdeaCard",
        entityId: id,
        originatedEntityId: id,
        eventUser: user,
        createdDateTime: timeCreated,
      },
    });
  },

  async beforeUpdate(event) {
    const { where } = event.params;
    const previousData = await strapi.entityService.findOne(
      "api::idea-card.idea-card",
      where.id
    );

    // Store the previous status in the context
    event.params.data.previousStatus = previousData.status;
  },

  async afterUpdate(event) {
    const { previousStatus } = event.params.data;
    const { id, ideaName, status, description } = event.result;

    const ctx = strapi.requestContext.get();
    const user = ctx.state.user;

    const userName = user.username;
    const statusChanged = status !== previousStatus;
    const title = statusChanged
      ? `Idea ${ideaName} is ${status}`
      : `Idea ${ideaName} was updated`;
    const content = statusChanged
      ? `${userName} has updated idea ${ideaName} - ${status}`
      : `${userName} has updated idea ${ideaName}`;

    await strapi.entityService.create("api::event.event", {
      data: {
        action: "Idea Updated",
        entityName: ideaName,
        content: description,
        entityType: "IdeaCard",
        entityId: id,
        originatedEntityId: id,
        eventUser: user,
        createdDateTime: new Date(),
      },
    });
  },
};
