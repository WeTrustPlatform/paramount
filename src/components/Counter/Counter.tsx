import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import {
  CounterStyles,
  GetCounterStyles,
  getCounterStyles,
} from './Counter.styles';

export interface CounterProps {
  /** Count to be displayed. */
  count?: number;

  /** Minimum count for the counter. Upon reaching the limit, it will disable decrement button. */
  min?: number;

  /** Maximum count for the counter. Upon reaching the limit, it will disable increment button. */
  max?: number;

  /** Custom component in place of count */
  component?: React.ReactNode;

  /** Called when increment button is pressed */
  onIncrement?: () => void;

  /** Called when decrement button is pressed */
  onDecrement?: () => void;

  /**
   * Inline styles for components
   */
  getStyles?: ReplaceReturnType<GetCounterStyles, DeepPartial<CounterStyles>>;
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
  )({ count }, theme);

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
            size={16}
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
            size={16}
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
