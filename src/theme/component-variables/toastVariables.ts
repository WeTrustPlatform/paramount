import { TextStyle, ViewStyle } from 'react-native';

import { IBoxProps } from '../../components/Layout/Box';
import { Omit } from '../../types/utils';
import { IThemeVariables } from '../ThemeInterface';

export interface IToastVariables {
  base: Omit<IBoxProps, 'theme'>;
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
      elevation: 1,
      padding: 16,
      shape: 'rounded',
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
      top: 0,
      zIndex: 100,
    },
  };
};
