const request = require("supertest");
const { getAuthenticatedUser } = require("../helpers/authenticated-user");

let jwt;

beforeAll(async () => {
  jwt = (await getAuthenticatedUser()).jwt;
});

describe("/api/comments", () => {
  it("should add comment", async () => {
    await request(strapi.server.httpServer)
      .post("/api/comments?populate=*")
      .send({
        data: { author: "tester2", idea_card: { id: 1 }, text: "test comment" },
      })
      .set("Authorization", "Bearer " + jwt)
      .expect(200)
      .then((data) => {
        expect(data.body.data.attributes.text).toBe("test comment");
      });
  });

  it("should list comments", async () => {
    await request(strapi.server.httpServer)
      .get("/api/comments")
      .set("Authorization", "Bearer " + jwt)
      .expect(200)
      .then((data) => {
        expect(data.body.data[0].attributes.text).toBe("test comment");
      });
  });
});
