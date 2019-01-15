import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import { FillColor } from '../../theme/ThemeInterface';
import Box, { Shape } from '../Layout/Box';
import { Strong } from '../Typography';
import { getTextStyles } from '../Typography/Text.styles';
import { BadgeSize, GetBadgeStyles, getBadgeStyles } from './Badge.styles';

export interface BadgeProps {
  children: React.ReactNode;
  theme: Theme;
  color?: FillColor;
  size?: BadgeSize;
  shape?: Shape;
  isSolid?: boolean;
  getStyles?: GetBadgeStyles;
}

const BadgeBase = (props: BadgeProps) => {
  const {
    children,
    color = 'neutral',
    getStyles = getBadgeStyles,
    isSolid = false,
    shape = 'rounded',
    size = 'small',
    theme,
  } = props;

  const { boxStyle, textStyle } = getStyles({ size, color, isSolid }, theme);

  return (
    <Box
      shape={shape}
      style={{
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: boxStyle.backgroundColor,
        display: 'flex',
        flexDirection: 'row',
        height: boxStyle.height,
        justifyContent: 'center',
        paddingLeft: boxStyle.paddingLeft,
        paddingRight: boxStyle.paddingRight,
        ...boxStyle,
      }}
    >
      <Strong
        size={size}
        getStyles={(...params) => {
          const { textStyle: defaultTextStyle } = getTextStyles(...params);
          return {
            textStyle: {
              ...defaultTextStyle,
              ...textStyle,
            },
          };
        }}
      >
        {children}
      </Strong>
    </Box>
  );
};

export const Badge = withTheme(BadgeBase);
export default Badge;
