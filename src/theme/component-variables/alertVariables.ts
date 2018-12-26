import { TextStyle, ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export interface IAlertSeparatedVariables {
  container: ViewStyle;
  body: ViewStyle;
  title: TextStyle;
  message: TextStyle;
}
export interface IAlertVariables extends IAlertSeparatedVariables {
  danger: IAlertSeparatedVariables;
  info: IAlertSeparatedVariables;
  success: IAlertSeparatedVariables;
  warning: IAlertSeparatedVariables;
}

export const getAlertVariables = (
  themeVariables: IThemeVariables,
): IAlertVariables => {
  return {
    body: {
      flex: 1,
    },
    container: {
      borderLeftWidth: 5,
      borderRadius: themeVariables.controlBorderRadius.medium,
      display: 'flex',
      flexDirection: 'row',
      padding: 16,
      ...themeVariables.elevations[2],
    },
    message: {},
    title: {},

    danger: {
      body: {},
      container: {
        borderLeftColor: themeVariables.colors.border.danger,
      },
      message: {},
      title: {},
    },
    info: {
      body: {},
      container: {
        borderLeftColor: themeVariables.colors.border.info,
      },
      message: {},
      title: {},
    },
    success: {
      body: {},
      container: {
        borderLeftColor: themeVariables.colors.border.success,
      },
      message: {},
      title: {},
    },
    warning: {
      body: {},
      container: {
        borderLeftColor: themeVariables.colors.border.warning,
      },
      message: {},
      title: {},
    },
  };
};
