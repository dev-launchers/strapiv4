const routes = require('.');

module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/welcome',
      handler: 'welcomeController.index',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/',
      handler: 'operationController.get',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/:fileId',
      handler: 'operationController.get',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'POST',
      path: '/',
      handler: 'operationController.upload',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'DELETE',
      path: '/:fileId',
      handler: 'operationController.delete',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
};
