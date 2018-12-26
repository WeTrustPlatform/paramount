import { TextStyle, ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

export interface AlertSeparatedVariables {
  container: ViewStyle;
  body: ViewStyle;
  title: TextStyle;
  message: TextStyle;
}
export interface AlertVariables extends AlertSeparatedVariables {
  danger: AlertSeparatedVariables;
  info: AlertSeparatedVariables;
  success: AlertSeparatedVariables;
  warning: AlertSeparatedVariables;
}

export const getAlertVariables = (
  themeVariables: ThemeVariables,
): AlertVariables => {
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
