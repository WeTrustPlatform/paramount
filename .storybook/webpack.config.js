module.exports = ({ config }) => {
  config.module.rules[0] = {
    test: /\.(jsx?|tsx?)?$/,
    exclude: /(node_modules)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-react', { development: true }],
            ['@babel/preset-typescript'],
            ['@babel/env'],
          ],
          plugins: [['@babel/plugin-proposal-class-properties']],
        },
      },
    ],
  };

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native': 'react-native-web',
  };

  config.resolve.extensions.unshift(
    '.web.ts',
    '.web.tsx',
    '.ts',
    '.tsx',
    '.web.js',
  );

  return config;
};
