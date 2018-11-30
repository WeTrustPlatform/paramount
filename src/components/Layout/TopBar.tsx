import * as React from 'react';

import FixedBar from './FixedBar';

export interface ITopBarProps {
  children: React.ReactNode;
  height?: number;
}

const TopBar = ({ children, height = 60 }: ITopBarProps) => {
  return (
    <FixedBar height={height} isTop>
      {children}
    </FixedBar>
  );
};

export default TopBar;
