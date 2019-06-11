import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ControlSize, TextColor, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetRatingStyles,
  getRatingStyles,
  RatingStyles,
} from './Rating.styles';
import { Star } from './Star';

export interface RatingProps {
  value?: number;
  maxRating?: number;
  size?: ControlSize;
  getStyles?: ReplaceReturnType<GetRatingStyles, DeepPartial<RatingStyles>>;
  onChange?: (value: number) => void;
  color?: TextColor;
}

export const Rating = (props: RatingProps) => {
  const {
    value = 0,
    maxRating = 5,
    size = 'medium',
    getStyles,
    onChange = () => undefined,
    color = 'primary',
  } = props;
  const theme = useTheme();

  const { containerStyle, starColor, starSize, touchableStyle } = mergeStyles(
    getRatingStyles,
    getStyles,
    theme.components.getRatingStyles,
  )({ size, color }, theme);

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
