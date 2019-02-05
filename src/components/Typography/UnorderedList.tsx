import * as React from 'react';

import { TextColor, TextSize } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { LiProps } from './Li';
import List from './List';

export interface ListProps {
  size?: TextSize;
  icon?: React.ReactNode;
  iconColor?: TextColor;
  children: Array<React.ReactElement<LiProps>>;
}

const UnorderedListBase = (props: ListProps) => {
  return <List listType="ul" {...props} />;
};

export const UnorderedList = withTheme(UnorderedListBase);
export default UnorderedList;
