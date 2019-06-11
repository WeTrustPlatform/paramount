import { ViewStyle } from 'react-native';

import { ControlSize, TextColor, Theme } from '../../theme/Theme';
import { getTextColor } from '../Typography/Text.styles';

export interface RatingStylesProps {
  size: ControlSize;
  color: TextColor;
}

export type GetRatingStyles = (
  progressStylesProps: RatingStylesProps,
  theme: Theme,
) => RatingStyles;

export interface RatingStyles {
  touchableStyle: ViewStyle;
  containerStyle: ViewStyle;
  starColor: string;
  starSize: number;
}

export const getRatingStyles: GetRatingStyles = ({ size, color }, theme) => {
  const starSize = theme.controlHeights[size];
  const padding = theme.controlPaddings[size];

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
