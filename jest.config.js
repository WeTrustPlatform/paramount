const { defaults } = require('jest-config');

module.exports = {
  preset: './tests/presets.js',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mdx?$': '<rootDir>/tests/mdxTransformer.js',
  },
  moduleNameMapper: {
    '^docz$': '<rootDir>/tests/doczMock.js',
  },
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
  ],
  testMatch: null,
  setupFiles: ['jest-canvas-mock'],
};
