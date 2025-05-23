// all Devlaunchers internal projects domains
const DevLaunchersSubdomains = [
  'https://ideaspace.devlaunchers.org',
  'https://ideaspace1.devlaunchers.org',
  'https://ideaspace2.devlaunchers.org',
  'https://projects.devlaunchers.org',
  'https://projects1.devlaunchers.org',
  'https://projects2.devlaunchers.org',
  'https://recruitment.devlaunchers.org',
  'https://recruitment1.devlaunchers.org',
  'https://recruitment2.devlaunchers.org',
  'https://website.devlaunchers.org',
  'https://website1.devlaunchers.org',
  'https://website2.devlaunchers.org',
  'https://user-profile.devlaunchers.org',
  'https://user-profile1.devlaunchers.org',
  'https://user-profile2.devlaunchers.org',
  'https://staging.devlaunchers.org',
  'https://apiv4-staging.devlaunchers.org',
  'https://apiv4.devlaunchers.org',
];

module.exports = [
  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'https://market-assets.strapi.io',
            /**
             * Note: If using a STORAGE_URL replace `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net` w/ process.env.STORAGE_URL
             * If using a CDN URL make sure to include that url in the CSP headers process.env.STORAGE_CDN_URL
             */
            process.env.STORAGE_URL,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            /**
             * Note: If using a STORAGE_URL replace `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net` w/ process.env.STORAGE_URL
             * If using a CDN URL make sure to include that url in the CSP headers process.env.STORAGE_CDN_URL
             */
            process.env.STORAGE_URL,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://devlaunchers.org',
        'http://localhost:1337',
        'http://localhost:3000',
        ...DevLaunchersSubdomains,
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  {
    name: 'strapi::session',
    config: {
      key: 'strapi::session',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: process.env.NODE_ENV === 'development' ? 'Lax' : 'None',
    },
  },

  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::favicon',
  'strapi::public',
  'plugin::users-permissions.jwt',
  {
    name: 'strapi::body',
    config: {
      enabled: true,
      multipart: true, // Enable multipart parsing for file uploads
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // Optional: Increase file size limit (e.g., 200MB)
      },
    },
  },
  {
    name: 'global::restrict-user-details',
    config: {
      allowedUserFields: ['id', 'username', 'profile'],
      allowedProfileFields: ['id', 'profilePictureUrl', 'displayName'],
    },
  },
];
