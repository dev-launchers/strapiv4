module.exports = {
  async afterCreate(event) {

    // Extract the ID of the created event
    const { id, entityId, action, entityType } = event.result;

      // Comment notifications are fully handled in comment/lifecycles.js.
    // Bail out here to prevent any possibility of duplicate notifications.
    if (action === "Commented" || entityType === "Comment") {
      console.log(`Skipping automatic notifications for comment event ${id}`);
      return;
    }

    try {
      // Fetch all users with active subscriptions for the given entityId
      const subscriptions = await strapi.entityService.findMany(
          "api::subscription.subscription",
          {
            filters: {
              entityId: entityId,
              active: true, // Changed from status: "active" to active: true
            },
            populate: ["user"],
          }
      );

      // Generate notifications for each subscribed user
      await Promise.all(
          subscriptions.map((subscription) => {
            return strapi.entityService.create("api::notification.notification", {
              data: {
                createdDateTime: new Date().toISOString(),
                readDateTime: null,
                event: id,
                user: subscription.user.id,
              },
            });
          })
      );

      console.log(
          `Notifications created for event ${id} and ${subscriptions.length} subscribed users.`
      );
    } catch (error) {
      console.error("Error creating notifications:", error);
    }
  },
};