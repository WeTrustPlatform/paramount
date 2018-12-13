import { ViewStyle } from 'react-native';

import { ICounterVariables } from '../component-variables/counterVariables';

export interface ICounterStyles {
  containerStyle: ViewStyle;
  countStyle: ViewStyle;
  counterStyle: ViewStyle;
  disabledStyle: ViewStyle;
}

export type GetCounterStyles = () => ICounterStyles;

export const getCounterStyles = (
  counterVariables: ICounterVariables,
): GetCounterStyles => () => {
  const { container, counter, count, disabled } = counterVariables;

  return {
    containerStyle: container,
    countStyle: count,
    counterStyle: counter,
    disabledStyle: disabled,
  };
};
