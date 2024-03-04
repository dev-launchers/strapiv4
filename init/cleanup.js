const fs = require("fs");
const Strapi = require("@strapi/strapi");

const cleanUpStrapi = async () => {
  await Strapi().load();

  const dbSettings = strapi.config.get("database.connection");

  await strapi.destroy();

  if (dbSettings && dbSettings.connection && dbSettings.connection.filename) {
    const tmpDbFile = dbSettings.connection.filename;
    if (fs.existsSync(tmpDbFile)) {
      fs.unlinkSync(tmpDbFile);
    }
  }
};

const run = async () => {
  await cleanUpStrapi();
  console.log("Strapi has been cleaned up");
};

run();
