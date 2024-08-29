module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
    "^axios$": "axios/dist/node/axios.cjs",
  },
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
