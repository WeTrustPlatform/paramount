import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
import { getTextColor } from '../Typography/Text.styles';
import { RatingProps } from './Rating';

export type GetRatingStyles = (
  progressStylesProps: RatingProps,
  theme: Theme,
) => RatingStyles;

export interface RatingStyles {
  touchableStyle: ViewStyle;
  containerStyle: ViewStyle;
  starColor: string;
  starSize: number;
}

export const getRatingStyles: GetRatingStyles = (
  { size = 'medium', color = 'primary' },
  theme,
) => {
  const starSize = isControlSize(size) ? theme.controlHeights[size] : size;
  const padding = isControlSize(size)
    ? theme.controlPaddings[size]
    : theme.controlPaddings.medium;

  return {
    containerStyle: {
      flexDirection: 'row',
    },
    touchableStyle: {
      paddingRight: padding,
    },

    starColor: getTextColor(theme.colors.text)(color),
    starSize,
  };
};
