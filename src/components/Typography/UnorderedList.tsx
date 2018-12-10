import * as React from 'react';

import { TextColor, TextSize } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import List from './List';
import { IListItemProps } from './ListItem';

export interface IListProps {
  size?: TextSize;
  icon?: React.ReactNode;
  iconColor?: TextColor;
  children: Array<React.ReactElement<IListItemProps>>;
}

const UnorderedListBase = (props: IListProps) => {
  return <List listType="ul" {...props} />;
};

export const UnorderedList = withTheme(UnorderedListBase);
export default UnorderedList;
