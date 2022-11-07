const { isDevEnv } = require('../utils/isDevEnv');
 
// all Devlaunchers internal projects domains
const DevLaunchersSubdomains = [
  'https://idea.devlaunchers.com',
  'https://idea-staging.devlaunchers.com',
  'https://idea-staging.devlaunchers.org',
  'https://idea.devlaunchers.org',
];
 
module.exports = [
 'strapi::errors',
 'strapi::security',
 {
   name: 'strapi::cors',
   config: {
     enabled: !isDevEnv(),
     origin: [process.env.FRONTEND_URL, process.env.URL, 'http://localhost:3000', ...DevLaunchersSubdomains],
   }
 },
 'strapi::poweredBy',
 'strapi::logger',
 'strapi::query',
 'strapi::body',
 'strapi::session',
 'strapi::favicon',
 'strapi::public',
 'plugin::users-permissions.jwt',
];
 


