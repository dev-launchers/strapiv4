const config = require("./config");
const Strapi = require("@strapi/strapi");

const authenticatedRolePermissions = require("./permissions/authenticated");
const publicRolePermissions = require("./permissions/public");

const setupStrapi = async () => {
  await Strapi().load();
  instance = strapi;
  return instance;
};

const stopStrapi = async (instance) => {
  await instance.stop();
};

const grantPrivileges = async (name, permissions) => {
  const role = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { name } }, []);

  const roleId = role.id;
  await strapi
    .plugin("users-permissions")
    .service("role")
    .updateRole(roleId, permissions);
  return roleId;
};

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
