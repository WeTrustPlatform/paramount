import * as React from 'react';
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

export interface BadgeProps {
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
  } = props;

  const { boxStyle, textStyle } = mergeStyles(getBadgeStyles, getStyles)(
    { size, color, isSolid },
    theme,
  );

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
        getStyles={() => ({
          textStyle,
        })}
      >
        {children}
      </Strong>
    </Box>
  );
};

export const Badge = withTheme(BadgeBase);
export default Badge;
