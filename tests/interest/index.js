const request = require("supertest");
const { getAuthenticatedUser } = require("../helpers/authenticated-user");

let jwt;

beforeAll(async () => {
  jwt = (await getAuthenticatedUser()).jwt;
});

describe("/api/interests", () => {
  it("create interest", async () => {
    await request(strapi.server.httpServer)
      .post("/api/interests")
      .send({ data: { interest: "CSS" } })
      .set("Authorization", "Bearer " + jwt)
      .expect(200)
      .then((data) => {
        expect(data.body.data.attributes.interest).toBe("CSS");
      });
  });

  it("find interest", async () => {
    await request(strapi.server.httpServer)
      .get("/api/interests")
      .set("Authorization", "Bearer " + jwt)
      .expect(200)
      .then((data) => {
        expect(data.body.data[0].attributes.interest).toBe("CSS");
      });
  });

  it("add interest", async () => {
    const interest = await strapi.query("api::interest.interest").findOne();
    await request(strapi.server.httpServer)
      .put("/api/users/1")
      .send({ interests: [{ id: interest.id }] })
      .set("Authorization", "Bearer " + jwt)
      .expect(200)
      .then((data) => {
        expect(data.body.id).toBe(1);
      })
      .then(async () => {
        await request(strapi.server.httpServer)
          .get("/api/users/1?populate=interests")
          .set("Authorization", "Bearer " + jwt)
          .expect(200)
          .then((data) => {
            expect(data.body.interests[0].interest).toBe("CSS");
          });
      });
  });
});
