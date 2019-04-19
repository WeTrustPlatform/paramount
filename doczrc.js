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
    const modifiedConfig = {
      ...defaultConfig,
      resolve: {
        ...defaultConfig.resolve,
        extensions: overridingExtensions,
      },
    };

    return modifiedConfig;
  },
  themeConfig: {
    showPlaygroundEditor: true,
  },
  codeSandbox: false,
  menu: ['Introduction', 'Getting Started', 'Customization', 'Components'],
};
