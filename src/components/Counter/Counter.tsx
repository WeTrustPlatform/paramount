import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import { GetCounterStyles, getCounterStyles } from './Counter.styles';

export interface CounterProps {
  /**
   * Count to be displayed.
   */
  count?: number;

  /**
   * Minimum count for the counter. Upon reaching the limit, it will disable decrement button.
   */
  min?: number;

  /**
   * Maximum count for the counter. Upon reaching the limit, it will disable increment button.
   */
  max?: number;

  /**
   * Custom component in place of count.
   */
  component?: React.ReactNode;

  /**
   * Called when increment button is pressed.
   */
  onIncrement?: () => void;

  /**
   * Called when decrement button is pressed.
   */
  onDecrement?: () => void;

  /**
   * Inline styles for components
   */
  getStyles?: GetCounterStyles;
}

export const Counter = (props: CounterProps) => {
  const {
    count = 0,
    component,
    max,
    min,
    onIncrement,
    onDecrement,
    getStyles,
  } = props;

  const theme = useTheme();

  const {
    containerStyle,
    counterStyle,
    countStyle,
    decrementWrapperStyle,
    disabledStyle,
    incrementWrapperStyle,
    textStyle,
  } = mergeStyles(
    getCounterStyles,
    getStyles,
    theme.components.getCounterStyles,
  )(props, theme);

  const isDecrementDisabled = min === count;
  const isIncrementDisabled = max === count;

  return (
    <View style={containerStyle}>
      <View style={decrementWrapperStyle}>
        <TouchableOpacity
          style={{
            ...counterStyle,
            ...(isDecrementDisabled && disabledStyle),
          }}
          disabled={isDecrementDisabled}
          onPress={!isDecrementDisabled ? onDecrement : undefined}
        >
          <Icon
            name="minus"
            size="xsmall"
            color={
              isDecrementDisabled
                ? theme.colors.text.muted
                : theme.colors.text.primary
            }
          />
        </TouchableOpacity>
      </View>
      {component || (
        <View style={countStyle}>
          <Text
            align="center"
            getStyles={() => ({ textStyle })}
          >{`${count}`}</Text>
        </View>
      )}
      <View style={incrementWrapperStyle}>
        <TouchableOpacity
          style={{
            ...counterStyle,
            ...(isIncrementDisabled && disabledStyle),
          }}
          disabled={isIncrementDisabled}
          onPress={!isIncrementDisabled ? onIncrement : undefined}
        >
          <Icon
            name="plus"
            size="xsmall"
            color={
              isIncrementDisabled
                ? theme.colors.text.muted
                : theme.colors.text.primary
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
