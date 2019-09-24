import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { CounterProps } from './Counter';

export interface CounterStyles {
  containerStyle: ViewStyle;
  counterStyle: ViewStyle;
  countStyle: ViewStyle;
  decrementWrapperStyle: ViewStyle;
  disabledStyle: ViewStyle;
  incrementWrapperStyle: ViewStyle;
  textStyle: TextStyle;
}

export type GetCounterStyles = (
  props: CounterProps,
  theme: Theme,
) => Partial<CounterStyles>;

export const getCounterStyles: GetCounterStyles = (props, theme) => {
  return {
    containerStyle: {
      display: 'flex',
      flexDirection: 'row',
    },
    countStyle: {
      justifyContent: 'center',
      minWidth: 24,
    },
    counterStyle: {
      alignItems: 'center',
      borderColor: theme.colors.border.primary,
      borderRadius: 999,
      borderWidth: 1,
      display: 'flex',
      height: 40,
      justifyContent: 'center',
      width: 40,
    },
    decrementWrapperStyle: { paddingRight: 16 },
    disabledStyle: {
      borderColor: theme.colors.border.default,
    },
    incrementWrapperStyle: { paddingLeft: 16 },
    textStyle: {},
  };
};
