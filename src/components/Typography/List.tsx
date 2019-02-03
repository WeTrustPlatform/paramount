import * as React from 'react';
import { Platform, View } from 'react-native';

import { TextSize } from '../../theme/ThemeInterface';
import { Spacing } from '../Layout';
import { ListItemProps } from './ListItem';

export interface ListProps {
  icon?: React.ReactNode;
  listType?: 'ol' | 'ul';
  size?: TextSize;
  children: Array<React.ReactElement<ListItemProps>>;
}

export const List = (props: ListProps) => {
  const { listType, children, icon, size = 'medium' } = props;

  const finalChildren = React.Children.map(children, (listItem, index) => {
    if (!React.isValidElement(listItem)) {
      return listItem;
    }

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
      accessibilityRole={Platform.OS === 'web' ? 'list' : 'none'}
    >
      <Spacing margin={0} marginLeft={1} padding={0}>
        {finalChildren}
      </Spacing>
    </View>
  );
};

export default List;
