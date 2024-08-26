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
        createdDateTime: new Date(),
        active: true,
        user: ctx.state.user,
      },
    });

    await strapi.entityService.create('api::event.event', {
      data: {
        title:"Idea Submitted Successfully",
        content: `${author} added new idea, ${ideaName} - ${tagline} is created`,
        entityType: "IdeaCard",
        entityId: id,
        createdDateTime: timeCreated,
      },
    });
  },

  async beforeUpdate(event) {
    const { where } = event.params;
    const previousData = await strapi.entityService.findOne('api::idea-card.idea-card', where.id);

    // Store the previous status in the context
    event.params.data.previousStatus = previousData.status;
  },

  async afterUpdate(event) {
    const { previousStatus } = event.params.data;
    const { id, ideaName, status } = event.result;

    const ctx = strapi.requestContext.get();
    const user = ctx.state.user;

    const userName = user.username;
    const statusChanged = status !== previousStatus;
    const title = statusChanged ? `Idea ${ideaName} is ${status}` : `Idea ${ideaName} was updated`;
    const content = statusChanged ? `${userName} has updated idea ${ideaName} - ${status}` : `${userName} has updated idea ${ideaName}`;

    await strapi.entityService.create('api::event.event', {
      data: {
        title,
        content,
        entityType: 'IdeaCard',
        entityId: id,
        createdDateTime: new Date(),
      },
    });
  },

}


