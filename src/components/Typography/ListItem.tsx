import * as React from 'react';
import { Platform, View } from 'react-native';

import { TextSize } from '../../theme/ThemeInterface';
import { Spacing } from '../Layout';
import Text, { TextProps } from './Text';

const paddingLeftMap = {
  large: 3,
  medium: 2,
  small: 2,
  xsmall: 1,
};

export interface ListItemProps extends TextProps {
  children: React.ReactNode;
  size?: TextSize;
  mark: React.ReactNode;
}

const ListItem = (props: ListItemProps) => {
  const { size = 'medium', mark, ...textProps } = props;

  const paddingLeft = paddingLeftMap[size] as 1 | 2 | 3;

  return (
    // @ts-ignore
    <View accessibilityRole={Platform.OS === 'web' ? 'listitem' : 'none'}>
      <Spacing flexDirection="row" alignItems="center" marginVertical={1}>
        <Spacing>{mark}</Spacing>
        <Spacing width="100%" paddingLeft={paddingLeft}>
          <Text isInline size={size} {...textProps} />
        </Spacing>
      </Spacing>
    </View>
  );
};

export default ListItem;
