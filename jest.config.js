module.exports = {
  preset: './tests/presets.js',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mdx?$': '<rootDir>/tests/mdxTransformer.js',
  },
  moduleNameMapper: {
    '^docz$': '<rootDir>/tests/doczMock.js',
  },
  setupFiles: ['jest-canvas-mock'],
};
