import * as React from 'react';

import { TextSize } from '../../theme/Theme';
import { List } from './List';
import { ListItemProps } from './ListItem';

export interface NumberedListProps {
  size?: TextSize;
  children: Array<React.ReactElement<ListItemProps>>;
}

export const NumberedList = (props: NumberedListProps) => {
  return <List listType="ol" {...props} />;
};
