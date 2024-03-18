module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
  sentry: {},
});
