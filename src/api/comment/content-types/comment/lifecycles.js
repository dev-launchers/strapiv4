module.exports = {

  async afterCreate(event) {

    const { idea_card: idea, author: commentAuthor, text: commentText, createdAt: timeCreated } = event.params.data;
    const commentId = event.result.id
    
    await strapi.entityService.create('api::notification.notification', {
      data: {
        Title: commentAuthor + " commented on ",
        Content: commentText,
        entityType: "Comment",
        entityId: commentId,
        TimeCreated: timeCreated,
        Read: false
      },
    });

  }

}

