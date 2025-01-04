module.exports = {
  beforeCreate(event) {
    // Set author to the user sending the request
    const ctx = strapi.requestContext.get();
    event.params.data.user = ctx.state.user;
    event.params.data.author = ctx.state.user.username;
  },

  async afterCreate(event) {
    const { id: commentId, text: commentText } = event.result;
    const comment = await strapi.entityService.findOne(
      "api::comment.comment",
      commentId,
      {
        populate: ["idea_card", "user"],
      }
    );

    const idea = comment.idea_card;
    const user = comment.user;

    /** verify that user isn't already subscribed to ideaCard */
    const existingSubscriptions = await strapi.entityService.findMany(
      "api::subscription.subscription",
      {
        filters: { user: user, entityId: idea.id },
        limit: 1,
      }
    );

    if (!existingSubscriptions.length)
      await strapi.entityService.create("api::subscription.subscription", {
        data: {
          entityType: "Comment",
          entityId: idea.id,
          createdDateTime: new Date(),
          active: true,
          user: user,
        },
      });

    await strapi.entityService.create("api::event.event", {
      data: {
        action: "Commented",
        entityName: idea.ideaName,
        content: commentText,
        entityType: "Comment",
        entityId: idea.id,
        originatedEntityId: commentId,
        eventUser: user?.id,
        createdDateTime: new Date(),
      },
    });
  },
};
