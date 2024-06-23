module.exports = {

  beforeCreate(event) {
    // Set author to the user sending the request
    const ctx = strapi.requestContext.get();
    event.params.data.user = ctx.state.user;
    event.params.data.author = ctx.state.user.username;
  },

  async afterCreate(event) {
    const { id: commentId, text: commentText } = event.result;
    const comment = await strapi.entityService.findOne("api::comment.comment", commentId, {
      populate: ["idea_card", "user"],
    })

    const idea = comment.idea_card;
    const user = comment.user;

    strapi.entityService.create('api::event.event', {
      data: {
        title: `${user.username} commented on ${idea?.ideaName}`,
        content: commentText,
        entityType: "IdeaCard",
        entityId: idea?.id,
        createdDateTime: new Date(),
      },
    });

  }

}

