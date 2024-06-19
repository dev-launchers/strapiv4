module.exports = ({ env }) => ({
  connection:
    process.env.TEST_CONTAINER === "true"
      ? {
          client: "postgres",
          connection: {
            host: "localhost",
            port: env.int("DATABASE_PORT", 5432),
            database: "test",
            user: "test",
            password: "test",
            schema: "public",
            ssl: false,
          },
          debug: false,
        }
      : {
          client: "sqlite",
          connection: {
            filename: env("DATABASE_FILENAME", '.tmp/test.db'),
            schema: false,
          },
          useNullAsDefault: true,
        },
});
