import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { FillColor } from '../../theme/ThemeInterface';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import Box, { Shape } from '../Layout/Box';
import { Text } from '../Typography';
import {
  BadgeSize,
  BadgeStyles,
  GetBadgeStyles,
  getBadgeStyles,
} from './Badge.styles';

export interface BadgeProps {
  children: React.ReactNode;
  theme: Theme;
  color?: FillColor;
  size?: BadgeSize;
  shape?: Shape;
  isSolid?: boolean;
  getStyles?: ReplaceReturnType<GetBadgeStyles, DeepPartial<BadgeStyles>>;
  testID?: string;
}

const BadgeBase = (props: BadgeProps) => {
  const {
    children,
    color = 'neutral',
    getStyles,
    isSolid = false,
    shape = 'rounded',
    size = 'small',
    theme,
    testID,
  } = props;

  const { containerStyle, textStyle } = mergeStyles(getBadgeStyles, getStyles)(
    { size, color, isSolid, shape },
    theme,
  );

  return (
    <View style={containerStyle} testID={testID}>
      <Text
        bold
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

export const Badge = withTheme(BadgeBase);
export default Badge;
