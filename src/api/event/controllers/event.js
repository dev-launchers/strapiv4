const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({

  async find(ctx) {
    const events = await strapi.entityService.findMany('api::event.event', {
      populate: ['eventUser'],
    });

    // Retrieve latest entityName for each event Dynamically
    const enhancedEvents = await Promise.all(events.map(async (event) => {
      let entityName = '';

      if (event.entityType === 'IdeaCard') {
        const ideaCard = await strapi.entityService.findOne('api::idea-card.idea-card', event.entityId);
        entityName = ideaCard ? ideaCard.ideaName : 'Unknown Idea';
      } else if (event.entityType === 'Comment') {
        const comment = await strapi.entityService.findOne('api::comment.comment', event.entityId);
        entityName = comment ? comment.text : 'Unknown Comment';
      }

      return {
        ...event,
        entityName,  // Adding the dynamic (latest) entityName to the event
      };
    }));

    return enhancedEvents;
  },
}));
