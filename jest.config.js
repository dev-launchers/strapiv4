module.exports = {
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },
  testFailureExitCode: 0,
  collectCoverageFrom: ["src/api/**/*.js"],
  reporters: ['github-actions', 'default', 'summary'],
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
