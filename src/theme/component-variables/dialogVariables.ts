import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export interface IDialogVariables {
  body: ViewStyle;
  container: ViewStyle;
  modalContainer: ViewStyle;
  overlay: ViewStyle;
}

export const getDialogVariables = (
  themeVariables: IThemeVariables,
): IDialogVariables => {
  return {
    body: {
      maxHeight: 400,
      overflow: 'scroll',
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    container: {
      backgroundColor: 'white',
      elevation: 1,
      marginTop: 200,
      maxWidth: 600,
      minWidth: 280,
      position: 'relative',
      zIndex: 1,
    },
    modalContainer: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      width: '100%',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.3)',
      bottom: 0,
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%',
    },
  };
};
