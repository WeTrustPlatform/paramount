import { TextStyle, ViewStyle } from 'react-native';

import { Intent } from '../../constants/Intent';
import { Theme } from '../../theme';

export interface AlertStyles {
  containerStyle: ViewStyle;
  bodyStyle: ViewStyle;
  titleStyle: TextStyle;
  textStyle: TextStyle;
}

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

export const alertVariables = (theme: Theme): AlertVariables => {
  return {
    body: {
      flex: 1,
    },
    container: {
      backgroundColor: theme.colors.background.white,
      borderLeftWidth: 5,
      borderRadius: theme.controlBorderRadius.medium,
      display: 'flex',
      flexDirection: 'row',
      padding: 16,
      ...theme.elevations[2],
    },
    message: {},
    title: {},

    danger: {
      body: {},
      container: {
        borderLeftColor: theme.colors.border.danger,
      },
      message: {},
      title: {},
    },
    info: {
      body: {},
      container: {
        borderLeftColor: theme.colors.border.info,
      },
      message: {},
      title: {},
    },
    success: {
      body: {},
      container: {
        borderLeftColor: theme.colors.border.success,
      },
      message: {},
      title: {},
    },
    warning: {
      body: {},
      container: {
        borderLeftColor: theme.colors.border.warning,
      },
      message: {},
      title: {},
    },
  };
};

export interface AlertStyleProps {
  intent: Intent;
}

export type GetAlertStyles = (
  alertStyleProps: AlertStyleProps,
  theme: Theme,
) => AlertStyles;

export const getAlertStyles: GetAlertStyles = ({ intent }, theme) => {
  const { container, body, title, message, ...intents } = alertVariables(theme);

  const intentStyle = intents[intent];

  return {
    bodyStyle: {
      ...body,
      ...intentStyle.body,
    },
    containerStyle: {
      ...container,
      ...intentStyle.container,
    },
    textStyle: {
      ...message,
      ...intentStyle.message,
    },
    titleStyle: {
      ...title,
      ...intentStyle.title,
    },
  };
};
