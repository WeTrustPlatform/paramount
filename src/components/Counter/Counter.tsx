import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Spacing } from '../Layout';
import { Text } from '../Typography';
import {
  CounterStyles,
  GetCounterStyles,
  getCounterStyles,
} from './Counter.styles';

export interface CounterProps {
  theme: Theme;
  count: number;
  min?: number;
  max?: number;
  /* custom component in place of count */
  component?: React.ReactNode;
  onIncrement?: () => void;
  onDecrement?: () => void;
  /**
   * Inline styles for components
   */
  getStyles?: ReplaceReturnType<GetCounterStyles, DeepPartial<CounterStyles>>;
}

const CounterBase = (props: CounterProps) => {
  const {
    count,
    component,
    max,
    min,
    onIncrement,
    onDecrement,
    getStyles,
    theme,
  } = props;

  const {
    containerStyle,
    counterStyle,
    countStyle,
    textStyle,
    disabledStyle,
  } = mergeStyles(getCounterStyles, getStyles)(theme);

  const isDecrementDisabled = min === count;
  const isIncrementDisabled = max === count;

  return (
    <View style={containerStyle}>
      <Spacing paddingRight={2}>
        <TouchableOpacity
          activeOpacity={0.7}
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
      </Spacing>
      {component || (
        <View style={countStyle}>
          <Text getStyles={() => ({ textStyle })}>{`${count}`}</Text>
        </View>
      )}
      <Spacing paddingLeft={2}>
        <TouchableOpacity
          activeOpacity={0.7}
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
      </Spacing>
    </View>
  );
};

export const Counter = withTheme(CounterBase);
export default Counter;
