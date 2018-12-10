import * as React from 'react';
import { View } from 'react-native';

import { TextSize } from '../../theme/ThemeInterface';
import { GridBox } from '../Layout';
import { IListItemProps } from './ListItem';

export interface IListProps {
  icon?: React.ReactNode;
  listType?: 'ol' | 'ul';
  size?: TextSize;
  children: Array<React.ReactElement<IListItemProps>>;
}

export const List = (props: IListProps) => {
  const { listType, children, icon, size = 'medium' } = props;

  const finalChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // @ts-ignore
    const listItem = child as React.ReactElement<IListItemProps>;

    return React.cloneElement(listItem, {
      // Prefer more granularly defined icon if present
      icon: listItem.props.icon || icon,
      index: listType === 'ol' ? index + 1 : null,
      size: listItem.props.size || size,
    });
  });

  return (
    <View
      // @ts-ignore
      accessibilityRole="list"
    >
      <GridBox margin={0} marginLeft={1} padding={0}>
        {finalChildren}
      </GridBox>
    </View>
  );
};

export default List;
