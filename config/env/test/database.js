module.exports = ({ env }) => ({
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', process.env.PLAYWRIGHT === 'true' ? '.tmp/test.db' : 'integration-test/data.db'),
        schema: false,
      },
      useNullAsDefault: true,
    },
  });