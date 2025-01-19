const Strapi = require("@strapi/strapi");
const fs = require("fs");
const _ = require("lodash");

const authenticatedRolePermissions = require("./permissions/authenticated");
const publicRolePermissions = require("./permissions/public");
const config = require("./config");

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
  const instance = strapi;

  instance.server.mount();
  return instance;
};

const stopStrapi = async (instance) => {
  await instance.stop();
};

const cleanUpStrapi = async () => {
  await Strapi().load();

  cleanUpDatabase(strapi);
};

const bootstrapDatabase = async () => {
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
  const userId = await createUserWithAuthenticatedRole(roleId, config.user);
  const user2Id = await createUserWithAuthenticatedRole(roleId, config.user2);
  console.log("User with authenticated role created");
  await setupGoogleAuthProvider();
  console.log("Google auth provider setup");
  const interestId = await createInterests();
  console.log("Interests created");
  await assignUserInterstAndSkills(userId, config.userInterestAndSkills);
  console.log("Assigned interests and skills to user");
  await assignUserInterstAndSkills(user2Id, config.user2InterestAndSkills);
  console.log("Assigned interests and skills to user2");
  await createProject(interestId, userId, config.project);
  console.log("Project created");
  // creating project without associating team
  await createProject(interestId, userId, config.projectWithoutTeam, false);
  console.log("Project created without associated team");
  await createOpportunities(interestId);
  console.log("Opportunities created");
  return instance;
};

const cleanUpDatabase = async (strapi) => {
  const dbSettings = strapi.config.get("database.connection");
  await strapi.destroy();

  if (dbSettings?.connection?.filename) {
    const tmpDbFile = dbSettings.connection.filename;
    // Remove the test database file
    fs.rmSync(tmpDbFile, { maxRetries: 5, retryDelay: 1000, force: true });
    console.log("Database file removed: ", tmpDbFile);
  }
};

const createUserWithAuthenticatedRole = async (roleId, user) => {
  user.role = roleId;
  const existing = await strapi.plugins[
    "users-permissions"
  ].services.user.fetchAll({ filters: { email: user.email } });
  let result;
  if (existing.length > 0) {
    result = await strapi.plugins["users-permissions"].services.user.edit(
      existing[0].id,
      user
    );
  } else {
    result = await strapi.plugins["users-permissions"].services.user.add(user);
    if (user.profile) {
      await strapi.service("api::profile.profile").create({ data: { user: result.id, ...user.profile } });
    }
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

const createInterests = async () => {
  const service = strapi.service("api::interest.interest");
  let existing = await service.findOne({});
  if (existing) {
    return existing.id;
  }
  let interestId = null;
  for (const interest of config.interests) {
    existing = await service.create({ data: { interest } });
    if (!interestId) {
      interestId = existing.id;
    }
  }

  return interestId;
};

const assignUserInterstAndSkills = async (userId, interestAndSkills) => {
  // List all the interests
  const interestIDs = await strapi.entityService.findMany("api::interest.interest", {
    fields: ["id"],
    filters: {
      interest: interestAndSkills.interests,
    }
  });

  const skillIDs = await strapi.entityService.findMany("api::interest.interest", {
    fields: ["id"],
    filters: {
      interest: interestAndSkills.skills,
    }
  });

  await strapi.plugins["users-permissions"].services.user.edit(userId, {
    interests: interestIDs,
    skills: skillIDs,
  });
}

const createProject = async (interestId, userId, project, addTeam = true) => {
  let existing = await strapi.entityService.findMany("api::project.project", { filters: { slug: project.slug } });
  existing = existing[0];
  if (existing) {
    return;
  }
  project.interests = [interestId];

  if (addTeam) {
    project.team = {
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
  }
  const service = strapi.service("api::project.project");
  existing = await service.create({ data: project });
  let userObj = await strapi.entityService.findOne(
    'plugin::users-permissions.user',
    userId,
    { populate: ['projects'] }
  )

  await strapi.plugins["users-permissions"].services.user.edit(userId, {
    projects: [...userObj.projects, existing.id],
  });
};

const createOpportunities = async (interestId) => {

  for (let index = 0; index < config.opportunity.length; index++) {
    try {
      let existing = await strapi.entityService.findMany("api::opportunity.opportunity", { filters: { title: config.opportunity[index].title } });
      existing = existing[0];

      if (existing) {
        return;
      }

      config.opportunity[index].interests = [interestId];

      const service = strapi.service("api::opportunity.opportunity");
      await service.create({ data: config.opportunity[index] });

    }
    catch (e) {
      console.log(`Could not create opportunity due to an error ${e}`)
      continue
    }
  }
};

module.exports = {
  setupEnv,
  setupStrapi,
  stopStrapi,
  cleanUpStrapi,
  cleanUpDatabase,
  bootstrapDatabase,
  createUserWithAuthenticatedRole,
  createAdminUser,
  grantPrivileges,
  setupGoogleAuthProvider,
  createInterests,
  assignUserInterstAndSkills,
  createProject,
  createOpportunities,
};
