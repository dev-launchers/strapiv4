module.exports = {
  async afterCreate(event) {
    const createdEvent = event.result;
    const subscriptions = await strapi.entityService.findMany(
      "api::subscription.subscription",
      {
        filters: {
          entityId: createdEvent.entityId,
          entityType: createdEvent.entityType,
          active: true,
        },
        populate: ["user"],
      }
    );

    subscriptions.forEach(async (subscription) => {
      strapi.entityService.create("api::notification.notification", {
        data: {
          event: createdEvent,
          createdDateTime: new Date(),
          user: subscription.user,
        },
      });
    });
  },
};
