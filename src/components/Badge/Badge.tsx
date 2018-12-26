import * as React from 'react';
import { TextStyle } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { ControlSize } from '../../theme/component-variables/controlVariables';
import { FillColor } from '../../theme/ThemeInterface';
import { Box } from '../Layout';
import { BoxProps, Shape } from '../Layout/Box';
import { Strong } from '../Typography';

export interface BadgeProps {
  children: React.ReactNode;
  theme: Theme;
  color?: FillColor;
  size?: ControlSize;
  shape?: Shape;
  isSolid?: boolean;
  dangerouslySetInlineStyle?: {
    boxStyle: BoxProps;
    textStyle: TextStyle;
  };
}

const BadgeBase = (props: BadgeProps) => {
  const {
    children,
    color = 'neutral',
    dangerouslySetInlineStyle,
    isSolid = false,
    shape = 'rounded',
    size = 'small',
    theme,
  } = props;

  const { boxStyle, textStyle } = theme.getBadgeStyles(size, color, isSolid);

  return (
    <Box
      backgroundColor={boxStyle.backgroundColor}
      height={boxStyle.height}
      paddingLeft={boxStyle.paddingLeft}
      paddingRight={boxStyle.paddingRight}
      shape={shape}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      alignSelf="flex-start"
      {...dangerouslySetInlineStyle && dangerouslySetInlineStyle.boxStyle}
    >
      <Strong
        size={size}
        dangerouslySetInlineStyle={{
          textStyle: {
            ...textStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.textStyle),
          },
        }}
      >
        {children}
      </Strong>
    </Box>
  );
};

export const Badge = withTheme(BadgeBase);
export default Badge;
