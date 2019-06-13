import * as React from 'react';
import { Platform, View } from 'react-native';

import { TextSize } from '../../theme/Theme';
import { Box } from '../Box';
import { Text, TextProps } from './Text';

const paddingLeftMap = {
  large: 24,
  medium: 16,
  small: 16,
  xsmall: 8,
};

export interface ListItemProps extends TextProps {
  children: React.ReactNode;
  size?: TextSize;
  mark?: React.ReactNode;
}

export const ListItem = (props: ListItemProps) => {
  const { size = 'medium', mark, ...textProps } = props;

  const paddingLeft =
    typeof size === 'number' ? 16 : (paddingLeftMap[size] as 1 | 2 | 3);

  return (
    // @ts-ignore
    <View accessibilityRole={Platform.OS === 'web' ? 'listitem' : 'none'}>
      <Box flexDirection="row" alignItems="center" marginVertical={8}>
        <Box>{mark}</Box>
        <Box width="100%" paddingLeft={paddingLeft}>
          <Text isInline size={size} {...textProps} />
        </Box>
      </Box>
    </View>
  );
};
