'use strict';

/**
 * notification router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;


module.exports = createCoreRouter('api::notification.notification' , ({ strapi }) => ({
  routes: [
    {
      method: 'GET',
      path: '/notifications',
      handler: 'notification.find',
      config: {
        // The `isAuthenticated` policy found at `./src/api/notification/policies/isAuthenticated.js` is executed before the `find` action in the `notification.js` controller.
        policies: ['api::notification.isAuthenticated'] 
      }
    }
  ]
}));