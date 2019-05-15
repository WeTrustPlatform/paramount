import { TextStyle, ViewStyle } from 'react-native';

import { FillColor, Fills, Theme } from '../../theme/ThemeInterface';
import { Shape, shapeMapping } from '../Box';

export interface BadgeSizes {
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
}

export type BadgeSize = keyof BadgeSizes;

export interface BadgeVariables {
  fills: Fills;
  sizes: BadgeSizes;
}
export const getBadgeVariables = (theme: Theme): BadgeVariables => {
  return {
    fills: theme.fills,

    sizes: {
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
    },
  };
};

export interface BadgeStylesProps {
  shape: Shape;
  size: BadgeSize;
  color: FillColor;
  isSolid: boolean;
}

export interface BadgeStyles {
  textStyle: TextStyle;
  containerStyle: ViewStyle;
}

export type GetBadgeStyles = (
  props: BadgeStylesProps,
  theme: Theme,
) => BadgeStyles;

export const getBadgeStyles: GetBadgeStyles = (
  { size, color, isSolid, shape },
  theme,
) => {
  const badgeVariables = getBadgeVariables(theme);

  const shapeStyles = shapeMapping[shape];
  const fills = isSolid
    ? badgeVariables.fills.solid
    : badgeVariables.fills.subtle;

  const colors = fills[color];
  const { height, paddingLeft, paddingRight } = badgeVariables.sizes[size];

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
