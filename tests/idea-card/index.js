const request = require("supertest");
const { getAuthenticatedUser } = require("../helpers/authenticated-user");

let jwt;

beforeAll(async () => {
  jwt = (await getAuthenticatedUser()).jwt;
});

describe("/api/idea-cards", () => {
  it("should add idea", async () => {
    await request(strapi.server.httpServer)
      .post("/api/idea-cards")
      .send({
        data: {
          ideaName: "Testing",
          tagline: "Yay!",
          description: "I am testoig",
          targetAudience: "Yes",
          features: "Yes",
          experience: "Yes",
          extraInfo: "Yes",
          involveLevel: "minimum",
          status: "workshopping",
          author: 2,
          ideaOwner: 2,
        },
      })
      .set("Authorization", "Bearer " + jwt)
      .expect(200)
      .then((data) => {
        expect(data.body.data.attributes.ideaName).toBe("Testing");
      });
  });

  it("should list ideas", async () => {
    await request(strapi.server.httpServer)
      .get("/api/idea-cards")
      .set("Authorization", "Bearer " + jwt)
      .expect(200)
      .then((data) => {
        expect(data.body.data[0].attributes.ideaName).toBe("Testing");
      });
  });
});
