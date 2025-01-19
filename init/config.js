const { profile } = require("console");

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
    FRONTEND_URL: "http://localhost:3000",
  },
  admin: {
    email: "local-admin@devlaunchers.org",
    password: "W&x5ZzOMtBCVt1YAUiuSzt~5",
    firstname: "Admin",
    lastname: "User",
    isActive: true,
  },
  user: {
    username: "tester",
    email: "tester@test.com",
    provider: "local",
    password: "k2OSo9Td",
    confirmed: true,
    blocked: null,
    profile: {
      displayName: "Tester One",
      bio: "I am a tester 1",
      profilePictureUrl: "https://i.imgur.com/123.jpg",
    },
    professionalRole: {
      "category": "Development",
      "name": "Fullstack Developer"
    }
  },
  userInterestAndSkills: {
    interests: [
      "Python",
      "JavaScript",
    ],
    skills: [
      "JavaScript",
      "React",
    ]
  },
  user2: {
    username: "tester2",
    email: "tester2@test.com",
    provider: "local",
    password: "k2OSo9Td",
    confirmed: true,
    blocked: null,
    profile: {
      displayName: "Tester Two",
      bio: "I am a tester 2",
      profilePictureUrl: "https://i.imgur.com/124.jpg",
    },
    professionalRole: {
      "category": "Product / UX",
      "name": "UX Researcher"
    }
  },
  user2InterestAndSkills: {
    interests: [
      "Python",
      "AI",
    ],
    skills: [
      "CSS",
      "HTML"
    ]
  },
  interests: ["CSS", "HTML", "JavaScript", "Python", "React", "AI"],
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
  projectWithoutTeam: {
    slug: "dev-launchers-platform",
    title: "Dev Recruit",
    catchPhase:
      "Join a new Project or Product that aligns with your personal goals!",
    vision:
      "Dev Recruit will allow members and non-members to browse ideas, products and projects.",
    description: "Dev Recruit Project",
    commitmentLevel: "Medium to High",
    signupFormUrl: "http://localhost:3000",
    isListed: true,
    calendarId: "c_9c8sc215f8vopmjuj4ogamd7go@group.calendar.google.com",
    discordWebhookUrl: null
  },
  opportunity: [{
    title: "test opportunity",
    level: "Beginner",
    commitmentHoursPerWeek: 2,
    description: "test opportunity description",
    expectations: [
      {
        "id": 0,
        "expectation": "test expectation"
      }
    ],
    isHidden: true,
    roleCategory: "Development",
    roleType: "Back-End Developer",
    role: {
      "id": 1,
      "name": "Back-End Developer",
      "category": "Development"
    }
  },
  {
    title: "test second opportunity",
    level: "Beginner",
    commitmentHoursPerWeek: 2,
    description: "test opportunity description",
    expectations: [
      {
        "id": 0,
        "expectation": "test expectation"
      }
    ],
    isHidden: true,
    roleCategory: "Product / UX",
    roleType: "Product Lead",
    role: {
      "id": 2,
      "name": "Product Lead",
      "category": "Product / UX"
    }
  }]
};
