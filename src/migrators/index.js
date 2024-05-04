module.exports = async (strapi) => {
  const config = strapi.config.get("migrations");
  if (config?.enabled === true && config?.migrators?.length > 0) {
    for (const migrator of config.migrators) {
      await require(`./${migrator}`)(strapi);
    }
  }
};