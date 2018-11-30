import { reactNative } from 'docz-plugin-react-native';
import merge from 'webpack-merge';

const extensionsResolvers = {
  resolve: {
    extensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.ts', '.tsx'],
  },
};

export default {
  title: 'Paramount',
  typescript: true,
  plugins: [reactNative()],
  hashRouter: true,
  modifyBundlerConfig: config => {
    return merge(config, extensionsResolvers);
  },
  // temporary docs source
  dest: '/docs',
  base: './',
};
