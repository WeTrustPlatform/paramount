import React from 'react';

import { Box } from '../Box';

export interface PlaygroundProps {
  children: React.ReactNode;
}

export const Playground = (props: PlaygroundProps) => {
  const { children } = props;

  return <Box>{children}</Box>;
};
