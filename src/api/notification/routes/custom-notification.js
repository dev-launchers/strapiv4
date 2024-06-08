module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/notifications',
        handler: 'notification.find',
        config: {
          // Attaching the "is-notification-user" policy found at "./src/api/notification/policies/is-notification-user.js".
          policies: ['api::notification.is-notification-owner']
        }
      },
      {
        method: "GET",
        path: "/notifications/:id",
        handler: "notification.findOne",
        config: {
          policies: ["api::notification.is-notification-owner"]
        }
      }
    ]
}
  