const request = require("supertest");
const {
  getAuthenticatedUser,
  mockUser,
} = require("../helpers/authenticated-user");

it("Should login user and return jwt token", async () => {
  const { user } = await getAuthenticatedUser();
  await request(strapi.server.httpServer)
    .post("/api/auth/local")
    .set("accept", "application/json")
    .set("Content-Type", "application/json")
    .send({
      identifier: mockUser.email,
      password: mockUser.password,
    })
    .expect("Content-Type", /json/)
    .expect(200)
    .then((data) => {
      expect(data.body.jwt).toBeDefined();
    });
});
