const config = require("./config");
const Strapi = require("@strapi/strapi");
const fs = require("fs");
const _ = require("lodash");

const authenticatedRolePermissions = require("./permissions/authenticated");
const publicRolePermissions = require("./permissions/public");
const { argv } = require("process");

const setupEnv = (cb) => {
  fs.writeFile(".env", convertToEnv(config.env), cb);
};

const convertToEnv = (object) => {
  let envFile = "";
  for (const key of Object.keys(object)) {
    envFile += `${key}=${object[key]}\n`;
    process.env[key] = object[key];
  }
  return envFile;
};

const setupStrapi = async () => {
  await Strapi().load();
  instance = strapi;

  instance.server.mount();
  return instance;
};

const stopStrapi = async (instance) => {
  await instance.stop();
};

const createUserWithAuthenticatedRole = async (roleId) => {
  config.user.role = roleId;
  const email = config.admin.email;
  const existing = await strapi.plugins[
    "users-permissions"
  ].services.user.fetchAll({ where: { email } });
  let result;
  if (existing.length > 0) {
    result = await strapi.plugins["users-permissions"].services.user.edit(
      existing[0].id,
      config.user
    );
  } else {
    result = await strapi.plugins["users-permissions"].services.user.add(
      config.user
    );
  }
  return result.id;
};

const createAdminUser = async () => {
  const email = config.admin.email;
  config.admin.roles = [1];
  const existing = await strapi.admin.services.user.findOneByEmail(email);
  if (existing) {
    await strapi.admin.services.user.updateById(existing.id, config.admin);
  } else {
    await strapi.admin.services.user.create(config.admin);
  }
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

const setupGoogleAuthProvider = async () => {
  const customGrantConfig = {
    google: {
      enabled: config.google.enabled,
      icon: "google",
      key: config.google.key,
      secret: config.google.secret,
      callback: config.google.callback,
      scope: ["email", "profile"],
    },
  };

  const pluginStore = strapi.store({
    type: "plugin",
    name: "users-permissions",
  });
  const currentGrantConfig = (await pluginStore.get({ key: "grant" })) || {};

  _.keys(customGrantConfig).forEach((key) => {
    if (key in currentGrantConfig) {
      currentGrantConfig[key] = _.merge(
        currentGrantConfig[key],
        customGrantConfig[key]
      );
    }
  });
  await pluginStore.set({ key: "grant", value: currentGrantConfig });
};

const createInterests = async (userId) => {
  const service = strapi.service("api::interest.interest");
  let existing = await service.findOne({});
  if (existing) {
    return;
  }
  for (const interest of config.interests) {
    existing = await service.create({ data: { interest } });
  }
  await strapi.plugins["users-permissions"].services.user.edit(userId, {
    interests: [existing.id],
  });
  return existing.id;
};

const createProject = async (interestId, userId) => {
  const service = strapi.service("api::project.project");
  let existing = await service.findOne({});
  if (existing) {
    return;
  }
  config.project.interests = [interestId];
  config.project.team = {
    members: [
      {
        member: userId,
        role: "Developer",
      },
    ],
    leaders: [
      {
        leader: userId,
        role: "Project Manager",
      },
    ],
  };
  existing = await service.create({ data: config.project });
  await strapi.plugins["users-permissions"].services.user.edit(userId, {
    projects: [existing.id],
  });
};

const run = async () => {
    console.log("Environment setup");
    const instance = await setupStrapi();
    console.log("Strapi server initialized");
    await createAdminUser();
    console.log("Admin user created");
    const roleId = await grantPrivileges(
      "Authenticated",
      authenticatedRolePermissions
    );
    console.log("Authenticated role privileges granted");
    await grantPrivileges("Public", publicRolePermissions);
    console.log("Public role privileges granted");
    const userId = await createUserWithAuthenticatedRole(roleId);
    console.log("User with authenticated role created");
    await setupGoogleAuthProvider();
    console.log("Google auth provider setup");
    const interestId = await createInterests(userId);
    console.log("Interests created");
    await createProject(interestId, userId);
    console.log("Project created");
    if (!argv.includes("--no-stop")) {
      console.log("Stopping Strapi server...");
      console.log("Please run 'npm run develop' to start the server.");
      await stopStrapi(instance);
    }
};

run();
