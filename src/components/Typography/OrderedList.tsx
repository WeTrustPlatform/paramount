import * as React from 'react';

import { TextSize } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { LiProps } from './Li';
import List from './List';

export interface ListProps {
  size?: TextSize;
  children: Array<React.ReactElement<LiProps>>;
}

const OrderedListBase = (props: ListProps) => {
  return <List listType="ol" {...props} />;
};

export const OrderedList = withTheme(OrderedListBase);
export default OrderedList;
