module.exports = {
  async afterCreate(event) {
    // Extract the ID of the created event
    const { id, entityId } = event.result;

    try {
      // Fetch all users with active subscriptions for the given entityId
      const subscriptions = await strapi.entityService.findMany(
        "api::subscription.subscription",
        {
          filters: {
            entityId: entityId,
            status: "active",
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
