// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  setupFiles: ['./__tests__/test-env.js'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost:3001',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
