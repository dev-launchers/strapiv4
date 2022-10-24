const { isDevEnv } = require('../utils/isDevEnv');
 
// all Devlaunchers internal projects domains
const DevLaunchersSubdomains = [
 'https://projects-staging.devlaunchers.org',
 'https://dev-recruiters.vercel.app',
 'https://recruiting-staging.devlaunchers.org',
 'https://recruiting.devlaunchers.org'
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
 


