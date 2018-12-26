import { ViewStyle } from 'react-native';

import { CounterVariables } from '../component-variables/counterVariables';

export interface CounterStyles {
  containerStyle: ViewStyle;
  countStyle: ViewStyle;
  counterStyle: ViewStyle;
  disabledStyle: ViewStyle;
}

export type GetCounterStyles = () => CounterStyles;

export const getCounterStyles = (
  counterVariables: CounterVariables,
): GetCounterStyles => () => {
  const { container, counter, count, disabled } = counterVariables;

  return {
    containerStyle: container,
    countStyle: count,
    counterStyle: counter,
    disabledStyle: disabled,
  };
};
