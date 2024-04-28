const authenticatedRolePermissions = require("./permissions/authenticated");
const publicRolePermissions = require("./permissions/public");
const { setupStrapi, grantPrivileges, stopStrapi } = require("./common");

const run = async () => {
  const instance = await setupStrapi();
  console.log("Strapi instance initialized");
  await grantPrivileges("Authenticated", authenticatedRolePermissions);
  console.log("Authenticated role privileges granted");
  await grantPrivileges("Public", publicRolePermissions);
  console.log("Public role privileges granted");
  console.log("Stopping Strapi instance...");
  await stopStrapi(instance);
};

run();
