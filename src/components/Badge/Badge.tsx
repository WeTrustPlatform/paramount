import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { FillColor } from '../../theme/ThemeInterface';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Shape } from '../Layout/Box';
import { Text } from '../Typography';
import {
  BadgeSize,
  BadgeStyles,
  GetBadgeStyles,
  getBadgeStyles,
} from './Badge.styles';

export interface BadgeProps {
  children: React.ReactNode;
  color?: FillColor;
  size?: BadgeSize;
  shape?: Shape;
  isSolid?: boolean;
  getStyles?: ReplaceReturnType<GetBadgeStyles, DeepPartial<BadgeStyles>>;
  testID?: string;
}

export const Badge = (props: BadgeProps) => {
  const {
    children,
    color = 'neutral',
    getStyles,
    isSolid = false,
    shape = 'rounded',
    size = 'small',
    testID,
  } = props;

  const theme = useTheme();

  const { containerStyle, textStyle } = mergeStyles(getBadgeStyles, getStyles)(
    { size, color, isSolid, shape },
    theme,
  );

  return (
    <View style={containerStyle} testID={testID}>
      <Text
        isBold
        size={size}
        getStyles={() => ({
          textStyle,
        })}
      >
        {children}
      </Text>
    </View>
  );
};
