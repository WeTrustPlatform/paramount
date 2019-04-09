import { Platform, TextStyle, ViewStyle } from 'react-native';

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
      backgroundColor: theme.colors.background.white,
      borderRadius: theme.controlBorderRadius.medium,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      ...theme.elevations[2],
    },

    backgroundDanger: {
      backgroundColor: theme.colors.background.dangerDefault,
    },
    textDanger: {
      color: theme.colors.text.white,
    },

    backgroundInfo: {
      backgroundColor: theme.colors.background.white,
    },
    textInfo: {
      color: theme.colors.text.default,
    },

    backgroundSuccess: {
      backgroundColor: theme.colors.background.successDefault,
    },
    textSuccess: {
      color: theme.colors.text.white,
    },

    backgroundWarning: {
      backgroundColor: theme.colors.background.warningDefault,
    },
    textWarning: {
      color: theme.colors.text.white,
    },

    container: {
      left: 32,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      maxWidth: 560,
      // @ts-ignore: Compat with web
      position: Platform.OS === 'web' ? 'fixed' : 'absolute',
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
