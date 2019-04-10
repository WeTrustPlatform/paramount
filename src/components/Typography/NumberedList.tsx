import * as React from 'react';

import { TextSize } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import List from './List';
import { ListItemProps } from './ListItem';

export interface ListProps {
  size?: TextSize;
  children: Array<React.ReactElement<ListItemProps>>;
}

const NumberedListBase = (props: ListProps) => {
  return <List listType="ol" {...props} />;
};

export const NumberedList = withTheme(NumberedListBase);
export default NumberedList;
