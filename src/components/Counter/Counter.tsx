import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../icons';
import { ITheme, withTheme } from '../../theme';
import { ICounterStyles } from '../../theme/style-getters/getCounterStyles';
import { Spacing } from '../Layout';

export interface ICounterProps {
  theme: ITheme;
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
  dangerouslySetInlineStyle?: Partial<ICounterStyles>;
}

const CounterBase = (props: ICounterProps) => {
  const {
    count,
    component,
    onIncrement,
    onDecrement,
    isIncrementDisabled,
    isDecrementDisabled,
    dangerouslySetInlineStyle,
    theme,
  } = props;

  const {
    containerStyle,
    counterStyle,
    countStyle,
    disabledStyle,
  } = theme.getCounterStyles();

  return (
    <View
      style={{
        ...containerStyle,
        ...(dangerouslySetInlineStyle &&
          dangerouslySetInlineStyle.containerStyle),
      }}
    >
      <Spacing paddingRight={2}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...counterStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.counterStyle),
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
                ? theme.themeVariables.colors.text.muted
                : theme.themeVariables.colors.text.primary
            }
          />
        </TouchableOpacity>
      </Spacing>
      {component || (
        <View
          style={{
            ...countStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.countStyle),
          }}
        >
          {count}
        </View>
      )}
      <Spacing paddingLeft={2}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...counterStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.counterStyle),
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
                ? theme.themeVariables.colors.text.muted
                : theme.themeVariables.colors.text.primary
            }
          />
        </TouchableOpacity>
      </Spacing>
    </View>
  );
};

export const Counter = withTheme(CounterBase);
export default Counter;
