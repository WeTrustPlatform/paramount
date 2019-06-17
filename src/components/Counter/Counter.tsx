import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import {
  CounterStyles,
  GetCounterStyles,
  getCounterStyles,
} from './Counter.styles';

export interface CounterProps {
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

export const Counter = (props: CounterProps) => {
  const {
    count,
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
    textStyle,
    disabledStyle,
  } = mergeStyles(
    getCounterStyles,
    getStyles,
    theme.components.getCounterStyles,
  )({}, theme);

  const isDecrementDisabled = min === count;
  const isIncrementDisabled = max === count;

  return (
    <View style={containerStyle}>
      <Box paddingRight={16}>
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
      </Box>
      {component || (
        <View style={countStyle}>
          <Text
            align="center"
            getStyles={() => ({ textStyle })}
          >{`${count}`}</Text>
        </View>
      )}
      <Box paddingLeft={16}>
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
      </Box>
    </View>
  );
};
