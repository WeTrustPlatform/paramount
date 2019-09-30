import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import { ControlSize, TextColor, useTheme } from '../../theme';
import { isControlSize } from '../../utils/isControlSize';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { getTextColor } from '../Typography';
import { Star } from './Star';

interface RatingBaseProps {
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
  onValueChange?: (value: number) => void;

  /**
   * Color of the rating stars
   */
  color?: TextColor;
}

export interface RatingOverrides {
  Root: RootProps;
  Star: StarProps;
}

export interface RatingProps
  extends WithOverrides<RatingBaseProps, RatingOverrides> {}

export const Rating = (props: RatingProps) => {
  const {
    value = 0,
    maxRating = 5,
    onValueChange = () => undefined,
    overrides = {},
    size = 'medium',
    color = 'primary',
  } = props;

  const [Root, rootProps] = getOverrides(StyledRoot, props, overrides.Root);
  const [StarR, starProps] = getOverrides(StyledStar, props, overrides.Star);

  return (
    <Root {...rootProps}>
      {new Array(maxRating).fill(0).map((_, index) => {
        const currentValue = index + 1;

        return (
          <StarR
            key={currentValue}
            color={color}
            maxRating={maxRating}
            rating={value}
            value={currentValue}
            size={size}
            onPress={() => onValueChange(currentValue)}
            {...starProps}
          />
        );
      })}
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
}

const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View style={[{ flexDirection: 'row' }, style]} {...viewProps}>
      {children}
    </View>
  );
};

interface StarProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  size: ControlSize | number;
  value: number;
  rating: number;
  color: TextColor;
  maxRating: number;
}

const StyledStar = (props: StarProps) => {
  const {
    children,
    style,
    size,
    color,
    value,
    rating,
    maxRating,
    ...touchableProps
  } = props;
  const theme = useTheme();

  const starSize = isControlSize(size) ? theme.controlHeights[size] : size;
  const padding = isControlSize(size)
    ? theme.controlPaddings[size]
    : theme.controlPaddings.medium;

  const isWithinRating = value <= rating;
  const isLast = value === maxRating;

  return (
    <TouchableOpacity
      style={{
        paddingRight: padding,
        ...(isLast ? { paddingRight: 0 } : {}),
      }}
      {...touchableProps}
    >
      <Star
        color={getTextColor(theme.colors.text)(color)}
        size={starSize}
        isFilled={isWithinRating}
      />
    </TouchableOpacity>
  );
};
