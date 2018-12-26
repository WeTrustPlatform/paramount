import { TextStyle, ViewStyle } from 'react-native';

import { BadgeVariables } from '../component-variables/badgeVariables';
import { ControlSize } from '../component-variables/controlVariables';
import { FillColor } from '../ThemeInterface';

export type GetBadgeStyles = (
  size: ControlSize,
  color: FillColor,
  isSolid: boolean,
) => {
  textStyle: TextStyle;
  boxStyle: ViewStyle;
};

export const getBadgeStyles = (
  badgeVariables: BadgeVariables,
): GetBadgeStyles => (size, color, isSolid) => {
  const fills = isSolid
    ? badgeVariables.fills.solid
    : badgeVariables.fills.subtle;

  const colors = fills[color];
  const { height, paddingLeft, paddingRight } = badgeVariables.sizes[size];

  return {
    boxStyle: {
      backgroundColor: colors.backgroundColor,
      height,
      paddingLeft,
      paddingRight,
    },
    textStyle: {
      color: colors.color,
      textTransform: 'uppercase',
    },
  };
};
