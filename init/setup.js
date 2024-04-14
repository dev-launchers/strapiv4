const authenticatedRolePermissions = require("./permissions/authenticated");
const publicRolePermissions = require("./permissions/public");

const {
  setupEnv,
  setupStrapi,
  createAdminUser,
  grantPrivileges,
  createUserWithAuthenticatedRole,
  createInterests,
  createProject,
  setupGoogleAuthProvider,
  stopStrapi,
} = require("./common");

const run = async () => {
  setupEnv(async () => {
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
    console.log("Stopping Strapi server...");
    console.log("Please run 'npm run develop' to start the server.");
    await stopStrapi(instance);
  });
};

run();
