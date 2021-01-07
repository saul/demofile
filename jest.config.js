module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.js"],
  collectCoverageFrom: ["src/**/*.ts"]
};
