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
        maxConcurrent: 10,
      },
    },
  },*/
  sentry: {
    enabled: true,
    config: {
      dsn: env("SENTRY_DSN"),
      sendMetadata: true,
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      jwtSecret: env("JWT_SECRET", "NlpLY6zZ7JON8CHyNORWKw=="),
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3, // Default is 5
    },
  },
  "strapi-prometheus": {
    enabled: true,
    config: {
      // add prefix to all the prometheus metrics names.
      prefix: "",

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
  upload: {
    config: {
      provider: "strapiv4-provider-to-google-drive",
      providerOptions: {
        publicFiles: true,
        uniform: false,
        serviceAccount: {
          type: "service_account",
          project_id: "applicantsportfolios",
          private_key_id: "c68c1891b5925978f0cbc2ec384347794cc10d83",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCR9aWXzwmVwBQt\nYBphdPK/3B9EL+OaNdvJOpxAh88Z2Gz+npQxAQOfrHRGDPK4J5gu60179ZR2vLLo\nxDKghitG26t/9HH3QdSoP9QaWadrdAexP9fDzv0ZlyWjwkxO1kBhDC+UY/QfZu4p\nd1b9ZhYb5wBGHUef/Vfqcu4ru/bqQ4MVi4FoUslPJkgKCWztNBWH1lsOIfXOKhW7\niaaWxB0P/uY+Asyz6PKDmGSHLxMyTgSbNlvwZTsTxTc4++WPsalHM2nG6NOvgYwX\n1Vw+0RE7tJov930T9DehVyuX2r3lEm9nDCPMkL3dhz48w4Q/afQ92JgmtAPY564u\nxpmClJA7AgMBAAECggEAGdDYZpbka5urFfF7CQS90Mh2sUFFIOfoxVk7/L/olfot\nIQXcUSSMRwgiEqfEoGTEanwM2uFvTmcGv9u/1puUePZuiXWrWJ/IpK+RbM2xqnQ9\nzhBsMcJhCs8shZ/ejk0f2upkWfsp2QoEEsp8VNpjC7FaX4xbOEV/cMS+MncO75UX\n0+ZtU+TRZ8EaFzp4Of7BRb3v7qYOmRaNYwwPRl7GRcamvGzWh49Ip7wJHGkj+zSK\nAJT8bezZB9GB3EWOdqlzawrh/TdA0CzehOubhM++TdjebJWABTFF/6PguNzbGqor\nNI5fqFRQHP0hhdxMwtGMibY6Drd/CnFq1y8tIdSDdQKBgQDMf1TeoPFAn6fP1IsV\ns3r1HmTNadmU0D1V+VNWaNiEF9wKgYZUoSuHDgci1Y9McWITnPmLhMTcqVuQ/z5K\nKNh+joc6x9CoPH5rXagmahXdGHYXXMRt6FvZhorp4L8R4hsR1yyf90T/nnKAIbpW\ncYhiDsAKxkP4AO45e28tfySi1QKBgQC2uCy8lttQ3RxZQqepvIMF67rzDgmmz5Y7\nJWt54K/8j6crkoipOdiGSABkeqjguqj5gReiL+bujPx01kVey5dzZIhWtBDZDRil\nQPtG8A5L5jgW3N/Z5Yuvvo0Kf0DGlF5tvtXevgH64rRaCbmae41JRm8evg4xPDKg\nx79vnPhOzwKBgARb7n40ZhAflx8qA7D5u3RAKpvqVrYCXlxXzTv5Tiw6qfkbW7aw\nHNJrLSHD9aMGg7WxUex0bxHZFleX6UcBaeQAu8c3/S2o5HT7cRsohcDJxbKnypQh\nMNwJLyrfHJOQA021DYF3buQYB47NqUAweVzFvbg9E7PUqT9Wbz9EB47lAoGBAJMO\nDWtGmoItQmiQXbIc9vJn81E0hg4L2iQGDMbNT7Ybw3Ys+/H+jUYdYrt7gLlFYUNV\nYzj0Bo8NRw2deb0+a8jCK3xkdX7KrIArmVBRWaA6TAASidKrjM3HtWmyWua3eHwo\n76XSFHPfyzj/xLIRJ/fGSR5b5b44baK6wFbK5Yk/AoGBAIZbPQqVoL7prK+i982/\nAo8ZUnQaIbtcO2FC6Cw+ObShPmF6lBSFYr7xpjE0TlRpq5f+AJxYc1hr8pJV6YyI\n4kZi8uj2jTffYxsqdRMYp7ThlO1owOztbT9ZqklP1BlztTt4UPJCCPQXxrGp0bZT\nHRe7KWL/rIDu2Ynf0i1O9+hE\n-----END PRIVATE KEY-----\n",
          client_email:
            "uploadportfolios@applicantsportfolios.iam.gserviceaccount.com",
          client_id: "102796769857842456420",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/uploadportfolios%40applicantsportfolios.iam.gserviceaccount.com",
          universe_domain: "googleapis.com",
        }, // replace `{}` with your serviceAccount JSON object
        //baseUrl: 'https://storage.googleapis.com/{bucket-name}',
        //basePath: '',
      },
    },
  },
  //...
});
