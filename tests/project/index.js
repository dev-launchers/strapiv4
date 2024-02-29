const request = require("supertest");
const { getAuthenticatedUser } = require("../helpers/authenticated-user");

let jwt;
let userId;

const project = {
  slug: "dev-recruiting",
  title: "Dev Recruit",
  catchPhase: "Join a new Project",
  vision: "Dev Recruit!",
  description: "Dev Recruit Project",
  commitmentLevel: "Medium to High",
  signupFormUrl: "http://localhost:3000",
  isListed: true,
  interests: [1],
  team: {
    members: [
      {
        member: 1,
        role: "Developer",
      },
    ],
    leaders: [
      {
        leader: 1,
        role: "Project Manager",
      },
    ],
  },
};

beforeAll(async () => {
  resp = await getAuthenticatedUser();
  jwt = resp.jwt;
  userId = resp.user.id;
  await strapi
    .service("api::interest.interest")
    .create({ data: { interest: "CSS" } });
  await strapi.service("api::project.project").create({ data: project });  
});

describe("/api/project", () => {
  it("find project", async () => {
    await request(strapi.server.httpServer)
      .get("/api/projects/dev-recruiting")
      .set("Authorization", "Bearer " + jwt)
      .expect(200)
      .then((data) => {
        result = data.body.data.attributes;
        expect(result.slug).toBe(project.slug);
        expect(result.title).toBe(project.title);
        expect(result.catchPhase).toBe(project.catchPhase);
        expect(result.vision).toBe(project.vision);
        expect(result.description).toBe(project.description);
        expect(result.commitmentLevel).toBe(project.commitmentLevel);
        expect(result.signupFormUrl).toBe(project.signupFormUrl);
        expect(result.isListed).toBe(project.isListed);
        const member = result.team.members[0];
        expect(member.id).toBe(1);
        expect(member.role).toBe(project.team.members[0].role);
        expect(member.username).toBe("tester");
        const leader = result.team.leaders[0];
        expect(leader.id).toBe(1);
        expect(leader.role).toBe(project.team.leaders[0].role);
        expect(leader.username).toBe("tester");
        expect(result.interests.data[0].attributes.interest).toBe("CSS");
      });
  });
});
