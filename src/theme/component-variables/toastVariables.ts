import { TextStyle, ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export interface IToastVariables {
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

export const getToastVariables = (
  themeVariables: IThemeVariables,
): IToastVariables => {
  return {
    base: {
      borderRadius: themeVariables.controlBorderRadius.medium,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      ...themeVariables.elevations[2],
    },

    backgroundDanger: {
      backgroundColor: themeVariables.colors.background.danger.default,
    },
    textDanger: {
      color: themeVariables.colors.text.plain,
    },

    backgroundInfo: {
      backgroundColor: themeVariables.colors.background.plain,
    },
    textInfo: {
      color: themeVariables.colors.text.default,
    },

    backgroundSuccess: {
      backgroundColor: themeVariables.colors.background.success.default,
    },
    textSuccess: {
      color: themeVariables.colors.text.plain,
    },

    backgroundWarning: {
      backgroundColor: themeVariables.colors.background.warning.default,
    },
    textWarning: {
      color: themeVariables.colors.text.plain,
    },

    container: {
      left: 0,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      maxWidth: 560,
      position: 'absolute',
      right: 0,
      top: 10,
      zIndex: 100,
    },
  };
};
