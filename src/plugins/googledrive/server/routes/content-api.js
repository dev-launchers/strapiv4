const routes = require('.');

module.exports = {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/',
      handler: 'welcomeController.index',
    },
    {
      method: 'GET',
      path: '/get',
      handler: 'operationController.get',
    },
    {
      method: 'POST',
      path: '/upload',
      handler: 'operationController.upload',
    },
    {
      method: 'DELETE',
      path: '/delete',
      handler: 'operationController.delete',
    },
  ],
};
