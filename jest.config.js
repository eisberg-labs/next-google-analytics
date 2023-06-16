const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/__tests__/"
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {tsconfig: './tsconfig.test.json'},
    ],
  },
  watchman: false,
  preset: 'ts-jest'
};

module.exports = config
