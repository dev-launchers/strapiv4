const config = require("./config");
const Strapi = require("@strapi/strapi");
const fs = require("fs");
const _ = require("lodash");

const authenticatedRolePermissions = require("./permissions/authenticated");
const publicRolePermissions = require("./permissions/public");

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

const createAdminUser = async () => {
  const email = config.admin.email;
  const user = {
    email: config.admin.email,
    password: config.admin.password,
    firstname: "Admin",
    lastname: "User",
    isActive: true,
    roles: [1],
  };
  const admin = await strapi.admin.services.user.findOneByEmail(email);
  if (admin) {
    await strapi.admin.services.user.updateById(admin.id, user);
  } else {
    await strapi.admin.services.user.create(user);
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

const createInterests = async () => {
  const service = strapi.service("api::interest.interest");
  const interest = await service.findOne({});
  if (interest) {
    return;
  }
  for (const interest of config.interests) {
    await service.create({ data: { interest } });
  }
};

const createProject = async () => {
  const service = strapi.service("api::project.project");
  const project = await service.findOne({});
  if (project) {
    return;
  }
  await service.create({ data: config.project });
};

const run = async () => {
  setupEnv(async () => {
    console.log("Environment setup");
    const instance = await setupStrapi();
    console.log("Strapi server initialized");
    await createAdminUser();
    console.log("Admin user created");
    await grantPrivileges("Authenticated", authenticatedRolePermissions);
    console.log("Authenticated role privileges granted");
    await grantPrivileges("Public", publicRolePermissions);
    console.log("Public role privileges granted");
    await setupGoogleAuthProvider();
    console.log("Google auth provider setup");
    await createInterests();
    console.log("Interests created");
    await createProject();
    console.log("Project created");
    console.log("Stopping Strapi server...");
    console.log("Please run 'npm run develop' to start the server.");
    await stopStrapi(instance);
  });
};

run();
