module.exports = {

  async afterCreate(event) {
    console.log(event)
    const { idea_card: idea, author: commentAuthor, text: commentText, createdAt: timeCreated } = event.result;
    const commentId = event.result.id
    console.log(idea)
    
    await strapi.entityService.create('api::notification.notification', {
      data: {
        Title: commentAuthor + " commented on " + idea?.ideaName,
        Content: commentText,
        entityType: "Comment",
        entityId: commentId,
        TimeCreated: timeCreated,
        Read: false
      },
    });

  }

}

