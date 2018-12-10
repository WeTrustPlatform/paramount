import * as React from 'react';

import { TextSize } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import List from './List';
import { IListItemProps } from './ListItem';

export interface IListProps {
  size?: TextSize;
  children: Array<React.ReactElement<IListItemProps>>;
}

const OrderedListBase = (props: IListProps) => {
  return <List listType="ol" {...props} />;
};

export const OrderedList = withTheme(OrderedListBase);
export default OrderedList;
