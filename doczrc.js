const path = require('path');

const overridingExtensions = [
  '.web.js',
  '.web.jsx',
  '.web.ts',
  '.web.tsx',
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.mdx',
  '.json',
  '.mjs',
];

export default {
  title: 'Paramount',
  typescript: true,
  native: true,
  modifyBundlerConfig: defaultConfig => {
    return {
      ...defaultConfig,
      resolve: {
        ...defaultConfig.resolve,
        extensions: overridingExtensions,
      },
    };
  },
  themeConfig: {
    showPlaygroundEditor: true,
  },
  codeSandbox: false,
  menu: ['Introduction', 'Getting Started', 'Customization', 'Components'],
  base: '/paramount/',
};
