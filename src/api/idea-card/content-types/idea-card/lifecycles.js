module.exports = {

  beforeCreate(event) {
      // Set author and ideaOwner to the user sending the request
      const ctx = strapi.requestContext.get();
      event.params.data.author = ctx.state.user;
      event.params.data.ideaOwner = ctx.state.user;
  },

  async afterCreate(event) {
    const { id: id, ideaName: ideaName, createdAt: timeCreated, tagline: tagline, author: author } = event.result;
    
    await strapi.entityService.create('api::event.event', {
      data: {
        Title:"Idea Submitted Successfully",
        content: author + " added new idea, " + ideaName + "-" + tagline +  "is created",
        entityType: "IdeaCard",
        entityId: id,
        createdDateTime: timeCreated
      },
    });
  },

  async beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    const previousData = await strapi.entityService.findOne('api::idea-card.idea-card', where.id, { populate });

    // Store the previous status in the context
    event.params.data.previousStatus = previousData.status;
  },

  async afterUpdate(event) {
    const { result, params } = event;
    const { previousStatus } = params.data;

    if (result.status !== previousStatus) {
      
      const { id, ideaName, status, createdAt } = result;
      const userName = params.data.userName || 'Unknown User';

      await strapi.entityService.create('api::event.event', {
        data: {
          title: `Idea ${ideaName} is ${status}`,
          content: `${userName} has updated idea ${ideaName} - ${status}`,
          entityType: 'IdeaCard',
          entityId: id,
          createdDateTime: createdAt,
        },
      });
    } else {
      const { id, ideaName, createdAt } = result;
      const userName = params.data.userName || 'Unknown User';
  
      await strapi.entityService.create('api::event.event', {
        data: {
          title: `Idea ${ideaName} was updated`,
          content: `${userName} has updated idea ${ideaName}`,
          entityType: 'IdeaCard',
          entityId: id,
          createdDateTime: createdAt,
        },
      });
    }
  },



}


