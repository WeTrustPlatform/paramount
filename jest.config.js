const { defaults } = require('jest-config');

module.exports = {
  preset: 'react-native-web',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
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
  setupFiles: ['jest-canvas-mock'],
};
