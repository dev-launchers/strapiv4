module.exports = {

  async afterCreate(event) {
    const { author: commentAuthor, text: commentText, createdAt: timeCreated } = event.result;
    const commentId = event.result.id
    const comment = await strapi.entityService.findOne("api::comment.comment", commentId, {
      populate: ["idea_card"],
    })
    
    await strapi.entityService.create('api::notification.notification', {
      data: {
        Title: commentAuthor + " commented on " + comment?.ideaName,
        Content: commentText,
        entityType: "Comment",
        entityId: commentId,
        TimeCreated: timeCreated,
        Read: false
      },
    });

  }

}

