module.exports = {

  beforeCreate(event) {
    // Set author to the user sending the request
    const ctx = strapi.requestContext.get();
    event.params.data.authorId = ctx.state.user;
    console.log("create comment ctx", ctx)
  },

  async afterCreate(event) {
    const { idea_card: idea, author: commentAuthor, text: commentText, createdAt: timeCreated } = event.result;
    const commentId = event.result.id
    
    await strapi.entityService.create('api::event.event', {
      data: {
        title: commentAuthor + " commented on " + idea?.ideaName,
        content: commentText,
        entityType: "Comment",
        entityId: commentId,
        createdDateTime: timeCreated,
        read: false
      },
    });

  }

}

