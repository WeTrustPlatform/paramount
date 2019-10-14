// import './index.css';
import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { Box } from '../src/components/Box';

const Decorator = story => {
  return <Box flex={1}>{story()}</Box>;
};

addDecorator(Decorator);

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module);
