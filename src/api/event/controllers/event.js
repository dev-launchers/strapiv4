const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  async find(ctx) {
    // filter with the query
    const { entityId, entityType } = ctx.query;

    // Fetch only the events that match the filters
    const filters = {};
    if (entityId) filters.entityId = entityId;
    if (entityType) filters.entityType = entityType;

    const events = await strapi.entityService.findMany('api::event.event', {
      filters,  // Apply filters to fetch specific events
      populate: ['eventUser'],  // Populate relations (e.g., eventUser)
    });

    // Retrieve latest entityName for each event Dynamically
    const latestEvents = await Promise.all(events.map(async (event) => {
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

    return latestEvents;  // Return the latest list of events
  },
}));
