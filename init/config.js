module.exports = {
  google: {
    enabled: true,
    key: "27004093375-056i2bnbk9g1bpuhbe642asvcl9da5p5.apps.googleusercontent.com",
    secret: "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",
    callback: "http://localhost:1337/api/auth/google/callback",
  },
  env: {
    URL: "http://localhost:1337",
    STRAPI_LOG_LEVEL: "debug",
    NODE_ENV: "development",
    FRONTEND_URL: "not_used",
  },
  admin: {
    email: "local-admin@devlaunchers.org",
    password: "W&x5ZzOMtBCVt1YAUiuSzt~5",
  },
  interests: ["CSS", "HTML", "JavaScript", "Python"],
  project: {
    slug: "dev-recruiting",
    title: "Dev Recruit",
    catchPhase:
      "Join a new Project or Product that aligns with your personal goals!",
    vision:
      "Dev Recruit will allow members and non-members to browse ideas, products and projects.",
    description: "Dev Recruit Project",
    commitmentLevel: "Medium to High",
    signupFormUrl: "http://localhost:3000",
    isListed: true,
  },
};
