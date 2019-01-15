import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';
import { Spacing } from '../Layout';
import { GetCounterStyles, getCounterStyles } from './Counter.styles';

export interface CounterProps {
  theme: Theme;
  count: number;
  /* custom component in place of count */
  component?: React.ReactNode;
  onIncrement?: () => void;
  onDecrement?: () => void;
  isIncrementDisabled?: boolean;
  isDecrementDisabled?: boolean;
  /**
   * Inline styles for components
   */
  getStyles?: GetCounterStyles;
}

const CounterBase = (props: CounterProps) => {
  const {
    count,
    component,
    onIncrement,
    onDecrement,
    isIncrementDisabled,
    isDecrementDisabled,
    getStyles = getCounterStyles,
    theme,
  } = props;

  const { containerStyle, counterStyle, countStyle, disabledStyle } = getStyles(
    theme,
  );

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
      {component || <View style={countStyle}>{count}</View>}
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
