import * as React from 'react';

import { TextColor } from '../../theme/ThemeInterface';
import ListItem, { ListItemProps } from './ListItem';

export interface BulletItemProps extends ListItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  iconColor?: TextColor;
}

const BulletItem = (props: BulletItemProps) => {
  const { icon, iconColor, ...listItemProps } = props;

  return <ListItem mark={icon} {...listItemProps} />;
};

export default BulletItem;
