import { ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

export interface CounterVariables {
  container: ViewStyle;
  count: ViewStyle;
  counter: ViewStyle;
  disabled: ViewStyle;
}

export const getCounterVariables = (
  themeVariables: ThemeVariables,
): CounterVariables => {
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
      borderColor: themeVariables.colors.border.primary,
      borderRadius: 999,
      borderWidth: 1,
      display: 'flex',
      height: 40,
      justifyContent: 'center',
      width: 40,
    },
    disabled: {
      borderColor: themeVariables.colors.border.muted,
    },
  };
};
