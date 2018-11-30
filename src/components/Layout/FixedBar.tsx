import * as React from 'react';

import Box from './Box';

export interface IFixedBarProps {
  children: React.ReactNode;
  isTop?: boolean;
  isBottom?: boolean;
  height?: number;
}

const FixedBar = ({
  children,
  height = 60,
  isTop,
  isBottom,
}: IFixedBarProps) => {
  return (
    <Box
      // @ts-ignore
      position="fixed"
      zIndex={1}
      top={isTop ? 0 : undefined}
      bottom={isBottom ? 0 : undefined}
      left={0}
      right={0}
      backgroundColor="white"
      height={height}
    >
      {children}
    </Box>
  );
};

export default FixedBar;
