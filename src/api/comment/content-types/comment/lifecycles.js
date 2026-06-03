module.exports = {
  beforeCreate(event) {
    const ctx = strapi.requestContext.get();
    event.params.data.user = ctx.state.user;
    event.params.data.author = ctx.state.user.username;
  },

  async afterCreate(event) {
    const { id: commentId, text: commentText } = event.result;
    const comment = await strapi.entityService.findOne(
        "api::comment.comment",
        commentId,
        { populate: ["idea_card", "user"] }
    );

    const idea = comment.idea_card;
    const user = comment.user;
    const currentUserId = user.id;

    // Get idea owner
    const ideaWithOwner = await strapi.entityService.findOne(
        "api::idea-card.idea-card",
        idea.id,
        { populate: ["ideaOwner"] }
    );
    const ideaOwnerId = ideaWithOwner?.ideaOwner?.id;

    // Get all EXISTING active subscribers for this idea,
    // excluding the commenter AND the idea owner (added separately below)
    const existingSubscriptions = await strapi.entityService.findMany(
        "api::subscription.subscription",
        {
          filters: {
            entityId: idea.id,
            active: true,
            $and: [
              { user: { id: { $ne: currentUserId } } },
              { user: { id: { $ne: ideaOwnerId } } },
            ],
          },
          populate: ["user"],
        }
    );

    // Build unique set of user IDs to notify
    const usersToNotify = new Set();

    // Add idea owner if they are not the commenter
    if (ideaOwnerId && ideaOwnerId !== currentUserId) {
      usersToNotify.add(ideaOwnerId);
    }

    // Add existing subscribers (already excludes commenter and owner)
    for (const sub of existingSubscriptions) {
      if (sub.user?.id) {
        usersToNotify.add(sub.user.id);
      }
    }


    // Subscribe the commenter if not already subscribed
    const commenterSubscription = await strapi.entityService.findMany(
        "api::subscription.subscription",
        {
          filters: { user: { id: currentUserId }, entityId: idea.id },
          limit: 1,
        }
    );

    if (!commenterSubscription.length) {
      await strapi.entityService.create("api::subscription.subscription", {
        data: {
          entityType: "IdeaCard",  // Fixed: subscription is on the idea, not a comment
          entityId: idea.id,
          createdDateTime: new Date(),
          active: true,
          user: currentUserId,
        },
      });
    }

    // Create the event record
    const newEvent = await strapi.entityService.create("api::event.event", {
      data: {
        action: "Commented",
        entityName: ideaWithOwner.ideaName,
        content: commentText,
        entityType: "Comment",
        entityId: idea.id,
        originatedEntityId: commentId,
        eventUser: currentUserId,
        createdDateTime: new Date(),
      },
    });

    // Create one notification per user to notify
    for (const userId of usersToNotify) {
      await strapi.entityService.create("api::notification.notification", {
        data: {
          user: userId,
          event: newEvent.id,
          createdDateTime: new Date(),
          readDateTime: null,
        },
      });
    }

  },
};