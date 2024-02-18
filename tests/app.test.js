const fs = require('fs');
const { setupStrapi, cleanupStrapi, grantPrivileges } = require("./helpers/strapi");

beforeAll(async () => {
  await setupStrapi();
  await grantPrivileges();
});

afterAll(async () => {
  await cleanupStrapi();
});

it("strapi is defined", () => {
  expect(strapi).toBeDefined();
});

require('./user');
require('./idea-card');
require('./comment');
require('./interest');