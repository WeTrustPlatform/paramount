import * as React from 'react';
import { Platform, View } from 'react-native';

import { TextSize } from '../../theme/Theme';
import { Box } from '../Box';
import { BulletItemProps } from './BulletItem';
import { NumberedItemProps } from './NumberedItem';

export interface ListProps {
  icon?: React.ReactNode;
  listType?: 'ol' | 'ul';
  size?: TextSize;
  children: Array<React.ReactElement<NumberedItemProps | BulletItemProps>>;
}

export const List = (props: ListProps) => {
  const { listType, children, icon, size = 'medium' } = props;

  const finalChildren = React.Children.map(children, (listItem, index) => {
    if (!React.isValidElement(listItem)) {
      return listItem;
    }

    return React.cloneElement(listItem, {
      // Prefer more granularly defined icon if present
      // @ts-ignore
      icon: listItem.props.icon || icon,
      index: listType === 'ol' ? index + 1 : undefined,
      size: listItem.props.size || size,
    });
  });

  return (
    <View
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'list' : 'none'}
    >
      <Box margin={0} marginLeft={8} padding={0}>
        {finalChildren}
      </Box>
    </View>
  );
};
