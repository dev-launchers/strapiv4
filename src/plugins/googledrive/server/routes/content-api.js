const routes = require('.');

module.exports = {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/welcome',
      handler: 'welcomeController.index',
    },
    {
      method: 'GET',
      path: '/:fileId?',
      handler: 'operationController.get',
    },
    {
      method: 'POST',
      path: '/',
      handler: 'operationController.upload',
    },
    {
      method: 'DELETE',
      path: '/:fileId',
      handler: 'operationController.delete',
    },
  ],
};
