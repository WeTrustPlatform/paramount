import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ControlSize, TextColor, useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { GetRatingStyles, getRatingStyles } from './Rating.styles';
import { Star } from './Star';

export interface RatingProps {
  /**
   * Rating value
   * @default 0
   */
  value?: number;

  /**
   * Maximum rating from 0.
   * @default 5
   */
  maxRating?: number;

  /**
   * The size of the rating star.
   * @default "medium"
   */
  size?: ControlSize | number;

  /**
   * Called when a rating star is pressed
   */
  onChange?: (value: number) => void;

  /**
   * Color of the rating stars
   */
  color?: TextColor;

  /** Callback to get element styles. */
  getStyles?: GetRatingStyles;
}

export const Rating = (props: RatingProps) => {
  const {
    value = 0,
    maxRating = 5,
    getStyles,
    onChange = () => undefined,
  } = props;
  const theme = useTheme();

  const { containerStyle, starColor, starSize, touchableStyle } = mergeStyles(
    getRatingStyles,
    getStyles,
    theme.components.getRatingStyles,
  )(props, theme);

  return (
    <View style={containerStyle}>
      {new Array(maxRating).fill(0).map((_, index) => {
        const currentValue = index + 1;
        const isWithinRating = currentValue <= value;
        const isLast = currentValue === maxRating;

        return (
          <TouchableOpacity
            key={currentValue}
            style={{
              ...touchableStyle,
              ...(isLast ? { paddingRight: 0 } : {}),
            }}
            onPress={() => onChange(currentValue)}
          >
            <Star color={starColor} size={starSize} isFilled={isWithinRating} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
