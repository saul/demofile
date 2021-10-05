module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testTimeout: 5 * 60 * 1000,
  collectCoverageFrom: ["src/**/*.ts"]
};
