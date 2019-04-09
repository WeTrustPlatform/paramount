import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface CounterVariables {
  container: ViewStyle;
  count: ViewStyle;
  counter: ViewStyle;
  disabled: ViewStyle;
}

export const getCounterVariables = (theme: Theme): CounterVariables => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    count: {
      justifyContent: 'center',
    },
    counter: {
      alignItems: 'center',
      borderColor: theme.colors.border.primary,
      borderRadius: 999,
      borderWidth: 1,
      display: 'flex',
      height: 40,
      justifyContent: 'center',
      width: 40,
    },
    disabled: {
      borderColor: theme.colors.border.dark,
    },
  };
};

export interface CounterStyles {
  containerStyle: ViewStyle;
  countStyle: ViewStyle;
  counterStyle: ViewStyle;
  disabledStyle: ViewStyle;
  textStyle: TextStyle;
}

export type GetCounterStyles = (theme: Theme) => CounterStyles;

export const getCounterStyles: GetCounterStyles = theme => {
  const counterVariables = getCounterVariables(theme);
  const { container, counter, count, disabled } = counterVariables;

  return {
    containerStyle: container,
    countStyle: count,
    counterStyle: counter,
    disabledStyle: disabled,
    textStyle: {},
  };
};
