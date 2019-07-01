import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { BadgeProps } from './Badge';

export interface BadgeStyles {
  textStyle: TextStyle;
  containerStyle: ViewStyle;
}

export type GetBadgeStyles = (props: BadgeProps, theme: Theme) => BadgeStyles;

export const getBadgeStyles: GetBadgeStyles = (
  { size = 'medium', color = 'neutral', isSolid = false, shape = 'rounded' },
  theme,
) => {
  const shapeStyles = theme.containerShapes[shape];
  const fills = isSolid ? theme.fills.solid : theme.fills.subtle;

  const colors = fills[color];
  const { height, paddingLeft, paddingRight } = {
    small: {
      height: theme.controlHeights.small,
      paddingLeft: theme.controlPaddings.small,
      paddingRight: theme.controlPaddings.small,
    },

    medium: {
      height: theme.controlHeights.medium,
      paddingLeft: theme.controlPaddings.medium,
      paddingRight: theme.controlPaddings.medium,
    },

    large: {
      height: theme.controlHeights.large,
      paddingLeft: theme.controlPaddings.large,
      paddingRight: theme.controlPaddings.large,
    },
  }[size];

  return {
    containerStyle: {
      alignItems: 'center',
      alignSelf: 'flex-start',
      backgroundColor: colors.backgroundColor,
      display: 'flex',
      flexDirection: 'row',
      height,
      justifyContent: 'center',
      paddingLeft,
      paddingRight,
      ...shapeStyles,
    },
    textStyle: {
      color: colors.color,
      textTransform: 'uppercase',
    },
  };
};
