import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { FillColor } from '../../theme/ThemeInterface';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import Box, { Shape } from '../Layout/Box';
import { Strong } from '../Typography';
import {
  BadgeSize,
  BadgeStyles,
  GetBadgeStyles,
  getBadgeStyles,
} from './Badge.styles';

export interface BadgeProps extends ViewProps {
  children: React.ReactNode;
  theme: Theme;
  color?: FillColor;
  size?: BadgeSize;
  shape?: Shape;
  isSolid?: boolean;
  getStyles?: ReplaceReturnType<GetBadgeStyles, DeepPartial<BadgeStyles>>;
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
    ...viewProps
  } = props;

  const { containerStyle, textStyle } = mergeStyles(getBadgeStyles, getStyles)(
    { size, color, isSolid, shape },
    theme,
  );

  return (
    <View style={containerStyle} {...viewProps}>
      <Strong
        size={size}
        getStyles={() => ({
          textStyle,
        })}
      >
        {children}
      </Strong>
    </View>
  );
};

export const Badge = withTheme(BadgeBase);
export default Badge;
