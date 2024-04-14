const { cleanUpStrapi }  = require("./common");

const run = async () => {
  await cleanUpStrapi();
  console.log("Strapi has been cleaned up");
};

run();
