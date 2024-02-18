const mockUser = {
    username: "tester",
    email: "tester@test.com",
    provider: "local",
    password: "1234abc",
    confirmed: true,
    blocked: null,
  };

const createUserWithAuthenticatedRole = async (newUser = {}) => {
  
    const advanced = await strapi.store({ type: "plugin", name: "users-permissions", key: "advanced" }).get();
  
    const defaultRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({ where: { type: advanced.default_role } });
  
      mockUser.role = defaultRole.id; // Assign the Authenticated role to the user
  
    const user = await strapi.plugins["users-permissions"].services.user.add({
      ...mockUser,
      ...newUser,
    });
    return user;
  };
  
  const getAuthenticatedUser = async () => {
    let user;
  
    user = await strapi.db.query("plugin::users-permissions.user").findOne({
      where: {
        email: "tester@test.com",
      },
      populate: { role: true },
    });
  
    if (!user) {
      user = await createUserWithAuthenticatedRole();
    }
  
    // Issue a token for this user - to test the private routes
    const jwt = strapi.plugin("users-permissions").service("jwt").issue({
      id: user.id,
    });
  
    return {
      user,
      jwt,
    };
  };
  
  module.exports = {
    getAuthenticatedUser,
    createUserWithAuthenticatedRole,
    mockUser
  };