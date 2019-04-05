const { defaults } = require('jest-config');

module.exports = {
  preset: 'react-native-web',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mdx?$': '<rootDir>/tests/mdxTransformer.js',
  },
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
  transformIgnorePatterns: ['/node_modules/(?!@expo/vector-icons).+\\.js$'],
  testRegex: './tests/snapshot.test.js',
  setupFiles: ['jest-canvas-mock'],
};
