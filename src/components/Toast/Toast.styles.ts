import { TextStyle, ViewStyle } from 'react-native';

import { Intent } from '../../constants';
import { Theme } from '../../theme/ThemeInterface';

export interface ToastVariables {
  base: ViewStyle;
  /** The area on screen where the toast appears */
  container: ViewStyle;

  textSuccess: TextStyle;
  backgroundSuccess: ViewStyle;
  textDanger: TextStyle;
  backgroundDanger: ViewStyle;
  textWarning: TextStyle;
  backgroundWarning: ViewStyle;
  textInfo: TextStyle;
  backgroundInfo: ViewStyle;
}

export const getToastVariables = (theme: Theme): ToastVariables => {
  return {
    base: {
      backgroundColor: theme.colors.background.plain,
      borderRadius: theme.controlBorderRadius.medium,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      ...theme.elevations[2],
    },

    backgroundDanger: {
      backgroundColor: theme.colors.background.danger.default,
    },
    textDanger: {
      color: theme.colors.text.plain,
    },

    backgroundInfo: {
      backgroundColor: theme.colors.background.plain,
    },
    textInfo: {
      color: theme.colors.text.default,
    },

    backgroundSuccess: {
      backgroundColor: theme.colors.background.success.default,
    },
    textSuccess: {
      color: theme.colors.text.plain,
    },

    backgroundWarning: {
      backgroundColor: theme.colors.background.warning.default,
    },
    textWarning: {
      color: theme.colors.text.plain,
    },

    container: {
      left: 32,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      maxWidth: 560,
      position: 'absolute',
      right: 32,
      top: 10,
      zIndex: 100,
    },
  };
};

export interface ToastStyles {
  containerStyle: ViewStyle;
}

export interface ToastStylesProps {
  intent: Intent;
}

export type GetToastStyles = (
  toastStylesProps: ToastStylesProps,
  theme: Theme,
) => ToastStyles;

export const getToastStyles: GetToastStyles = ({ intent }, theme) => {
  const toastVariables = getToastVariables(theme);

  return {
    containerStyle: toastVariables.container,
  };
};
