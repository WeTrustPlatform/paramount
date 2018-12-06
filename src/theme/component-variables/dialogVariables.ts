import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export interface IDialogVariables {
  body: ViewStyle;
  container: ViewStyle;
  modalContainer: ViewStyle;
  overlay: ViewStyle & { cursor?: string };
}

export const getDialogVariables = (
  themeVariables: IThemeVariables,
): IDialogVariables => {
  return {
    body: {
      maxHeight: 400,
      overflow: 'scroll',
    },
    container: {
      backgroundColor: 'white',
      elevation: 1,
      maxWidth: 600,
      minWidth: 280,
      position: 'relative',
      zIndex: 1,
    },
    modalContainer: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    overlay: {
      backgroundColor: themeVariables.colors.background.overlay,
      bottom: 0,
      cursor: 'auto',
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%',
    },
  };
};
