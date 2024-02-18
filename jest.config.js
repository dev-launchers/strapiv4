module.exports = {
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
  collectCoverageFrom: ["src/api/**/*.js"],
  coverageReporters: ["text"],
  testPathIgnorePatterns: [
    "/node_modules/",
    ".tmp",
    "/build/",
    ".cache",
  ],
  testEnvironment: "node",
  testTimeout: 30000,
};
