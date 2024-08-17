module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/notifications',
      handler: 'notification.find',
      config: {
        // Attaching the "is-notification-user" policy found at "./src/api/notification/policies/is-notification-user.js".
        policies: ['api::notification.notification-owner-filter']
      }
    },
    {
      method: "GET",
      path: "/notifications/:id",
      handler: "notification.findOne",
      config: {
        policies: ["api::notification.notification-owner-filter"]
      }
    },
    {
      method: "PUT",
      path: "/notifications/:id",
      handler: "notification.update",
      config: {
        policies: ["api::notification.notification-owner-filter"]
      }
    },
  ]
}
