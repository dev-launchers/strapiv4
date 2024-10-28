module.exports = ({ env }) => ({
  /*  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),
        serviceBaseURL: env("STORAGE_URL"), // optional
        containerName: env("STORAGE_CONTAINER_NAME"),
        defaultPath: "assets",
        maxConcurrent: 10
      },
    },
  },*/
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
    }
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: env('JWT_SECRET', 'NlpLY6zZ7JON8CHyNORWKw==')
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3, // Default is 5
    }
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
        name: "strapi-prometheus",
      },
    },
  },
  "strapi-provider-upload-google-storage": {
    enabled: true,
    resolve: "./src/plugins/strapi-provider-upload-google-storage",
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-google-storage",
      providerOptions: {
        publicFiles: true,
        uniform: false,

        serviceAccount: env.json("SERVICE_ACCOUNT"), // replace `{}` with your serviceAccount JSON object
        //baseUrl: 'https://storage.googleapis.com/{bucket-name}',
        //basePath: '',
      },
    },
  },
});
