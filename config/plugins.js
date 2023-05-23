module.exports = ({env}) => ({
    upload: {
      provider: 'azure-storage',
      providerOptions: {
        account: env('STORAGE_ACCOUNT'),
        accountKey: env('STORAGE_ACCOUNT_KEY'),
        serviceBaseURL: env('STORAGE_URL'),
        containerName: env('STORAGE_CONTAINER_NAME'),
        defaultPath: 'assets',
        maxConcurrent: 10
      }
    },
    sentry: {
      enabled: true,
      config: {
        dsn: 'https://9b74d2bd2a50432da68982c3c4d72420@o4505235023921152.ingest.sentry.io/4505235032899584',
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
});