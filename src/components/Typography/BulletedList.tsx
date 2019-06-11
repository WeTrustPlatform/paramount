import * as React from 'react';

import { TextColor, TextSize } from '../../theme/Theme';
import { List } from './List';
import { ListItemProps } from './ListItem';

export interface BulletedListProps {
  size?: TextSize;
  icon?: React.ReactNode;
  iconColor?: TextColor;
  children: Array<React.ReactElement<ListItemProps>>;
}

export const BulletedList = (props: BulletedListProps) => {
  return <List listType="ul" {...props} />;
};
