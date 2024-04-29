module.exports = {
  setupFiles: ["./jest.polyfills.js"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};
