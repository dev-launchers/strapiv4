module.exports = {

  beforeCreate(event) {
      // Set author and ideaOwner to the user sending the request
      const ctx = strapi.requestContext.get();
      event.params.data.author = ctx.state.user;
      event.params.data.ideaOwner = ctx.state.user;
  },

  async afterCreate(event) {
    const { id: id, ideaName: ideaName, createdAt: timeCreated } = event.result;
    
    await strapi.entityService.create('api::notification.notification', {
      data: {
        Title:"A new idea has been created",
        Content: "You created idea " + ideaName,
        entityType: "IdeaCard",
        entityId: id,
        TimeCreated: timeCreated,
        Read: false
      },
    });
  }

}


