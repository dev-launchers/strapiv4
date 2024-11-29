const routes = require('.');

module.exports = {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/',
      handler: 'myController.index',
      //config: {
      //  policies: [],
      //  auth: false,
      //},
    },
    {
      method: 'GET',
      path: '/get',
      handler: 'firstController.get',
      //config: {
      //  policies: [],
      //  auth: false,
      //},
    },
    /*{
      method: 'GET',
      path: '/get',
      handler: 'firstController.get',
      //config: {
      //  policies: [],
      //  auth: false,
      //},
    },*/
    {
      method: 'POST',
      path: '/upload',
      handler: 'firstController.upload',
      //config: {
      //  policies: [],
      //auth: false,
      //},
    },
    {
      method: 'DELETE',
      path: '/delete',
      handler: 'firstController.delete',
      //config: {
      //  policies: [],
      //auth: false,
      //},
    },
  ],
};
