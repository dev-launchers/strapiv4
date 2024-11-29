const routes = require('.');

module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/',
      handler: 'myController.index',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/get',
      handler: 'firstController.get',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    /*{
      method: 'GET',
      path: '/get',
      handler: 'firstController.get',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },*/
    {
      method: 'POST',
      path: '/upload',
      handler: 'firstController.upload',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'DELETE',
      path: '/delete',
      handler: 'firstController.delete',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
};
