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
  hashRouter: true,
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
  base: './',
};
