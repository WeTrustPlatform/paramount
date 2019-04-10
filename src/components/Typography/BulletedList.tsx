import * as React from 'react';

import { TextColor, TextSize } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import List from './List';
import { ListItemProps } from './ListItem';

export interface ListProps {
  size?: TextSize;
  icon?: React.ReactNode;
  iconColor?: TextColor;
  children: Array<React.ReactElement<ListItemProps>>;
}

const BulletedListBase = (props: ListProps) => {
  return <List listType="ul" {...props} />;
};

export const BulletedList = withTheme(BulletedListBase);
export default BulletedList;
