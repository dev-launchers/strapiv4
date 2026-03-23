module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-cloudflare-r2',
      providerOptions: {
        accessKeyId: env('STORAGE_CF_ACCESS_KEY_ID'),
        secretAccessKey: env('STORAGE_CF_ACCESS_SECRET'),
        /**
         * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
         */
        endpoint: env('STORAGE_CF_ENDPOINT'),
        params: {
          Bucket: env('STORAGE_CF_BUCKET'),
        },
        /**
         * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
         * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PUBLIC_BUCKET_ID>.r2.dev
         * This option is required to upload files larger than 5MB, and is highly recommended to be set.
         * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
         */
        cloudflarePublicAccessUrl: env('STORAGE_CF_PUBLIC_ACCESS_URL'),
        /**
         * Sets if all assets should be uploaded in the root dir regardless the strapi folder.
         * It is useful because strapi sets folder names with numbers, not by user's input folder name
         * By default it is false
         */
        pool: false,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: env('JWT_SECRET', 'NlpLY6zZ7JON8CHyNORWKw=='),
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3, // Default is 5
    },
  },
  'strapi-prometheus': {
    enabled: true,
    config: {
      // add prefix to all the prometheus metrics names.
      prefix: '',

      // use full url instead of matched url
      // true  => path label: `/api/models/1`
      // false => path label: `/api/models/:id`
      fullURL: false,

      // include url query in the url label
      // true  => path label: `/api/models?limit=1`
      // false => path label: `/api/models`
      includeQuery: false,

      // metrics that will be enabled, by default they are all enabled.
      enabledMetrics: {
        koa: true, // koa metrics
        process: false, // metrics regarding the running process
        http: true, // http metrics like response time and size
        apollo: false, // metrics regarding graphql
      },

      // interval at which rate metrics are collected in ms
      interval: 10_000,

      // set custom/default labels to all the prometheus metrics
      customLabels: {
        name: 'strapi-prometheus',
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: env('NODE_MAILER_EMAIL'),
          pass: env('NODE_MAILER_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('NODE_MAILER_EMAIL'),
        defaultReplyTo: env('NODE_MAILER_EMAIL'),
      },
    },
  },
  googledrive: {
    enabled: true,
    resolve: './src/plugins/googledrive',
    config: {
      provider: 'googledrive',
      providerOptions: {
        publicFiles: true,
        uniform: false,
        serviceAccount: env.json('GOOGLE_DRIVE_SERVICE_ACCOUNT'),
        folderId: env('GOOGLE_DRIVE_FOLDERID'),
      },
    },
  },
});
