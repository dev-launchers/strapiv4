module.exports = {

  beforeCreate(event) {
      // Set author and ideaOwner to the user sending the request
      const ctx = strapi.requestContext.get();
      event.params.data.author = ctx.state.user;
      event.params.data.ideaOwner = ctx.state.user;
  },

  async afterCreate(event) {
    const { id: id, ideaName: ideaName, createdAt: timeCreated, tagline: tagline } = event.result;
    const author = event.params.data.author.username;

    const ctx = strapi.requestContext.get();

    await strapi.entityService.create('api::subscription.subscription', {
      data: {
        entityType: "IdeaCard",
        entityId: id,
        TimeCreated: new Date(),
        active: true,
        user: ctx.state.user,
      },
    });
    
    strapi.entityService.create('api::event.event', {
      data: {
        title:"Idea Submitted Successfully",
        content: `${author} added new idea, ${ideaName} - ${tagline} is created`,
        entityType: "IdeaCard",
        entityId: id,
        createdDateTime: timeCreated
      },
    });
  }

}


