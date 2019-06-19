import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
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
