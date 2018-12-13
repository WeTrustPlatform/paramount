import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export interface ICounterVariables {
  container: ViewStyle;
  count: ViewStyle;
  counter: ViewStyle;
  disabled: ViewStyle;
}

export const getCounterVariables = (
  themeVariables: IThemeVariables,
): ICounterVariables => {
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
      height: 32,
      justifyContent: 'center',
      width: 32,
    },
    disabled: {
      borderColor: themeVariables.colors.border.muted,
    },
  };
};
