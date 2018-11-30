import * as React from 'react';

import FixedBar from './FixedBar';

export interface IBottomBarProps {
  children: React.ReactNode;
  height?: number;
}

const BottomBar = ({ children, height = 60 }: IBottomBarProps) => {
  return (
    <FixedBar height={height} isBottom>
      {children}
    </FixedBar>
  );
};

export default BottomBar;
