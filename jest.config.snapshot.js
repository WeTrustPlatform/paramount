const { defaults } = require('jest-config');

module.exports = {
  preset: 'react-native-web',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mdx?$': '<rootDir>/tests/mdxTransformer.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!react-native-svg).+\\.js$'],
  moduleNameMapper: {
    '^docz$': '<rootDir>/tests/doczMock.js',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    ...defaults.moduleFileExtensions,
  ],
  testRegex: './tests/snapshot.test.js',
  setupFiles: ['jest-canvas-mock'],
};
