const { setupEnv, bootstrapDatabase, stopStrapi } = require("./common");

const run = async () => {
  setupEnv(async () => {
    console.log("Environment setup");
    const instance = await bootstrapDatabase();
    console.log("Stopping Strapi server...");
    console.log("Please run 'npm run develop' to start the server.");
    await stopStrapi(instance);
  });
};

run();
