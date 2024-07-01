module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/notifications',
        handler: 'notification.find',
        config: {
          // Attaching the "add-notification-owner-filter" policy found at "./src/api/notification/policies/add-notification-owner-filter.js".
          policies: ['api::notification.add-notification-owner-filter']
        }
      },
      {
        method: "GET",
        path: "/notifications/:id",
        handler: "notification.findOne",
        config: {
          // for findOne we need to read notification and check the user of the notification and verify if it is the same as the current user
          policies: ["api::notification.add-notification-owner-filter"]
        }
      }
    ]
}
  