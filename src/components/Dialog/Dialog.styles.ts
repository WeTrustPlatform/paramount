import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface DialogStyles {
  bodyStyle: ViewStyle;
  containerStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
  contentContainerStyle: ViewStyle;
  overlayStyle: ViewStyle;
}

export type GetDialogStyles = (theme: Theme) => DialogStyles;

export const getDialogStyles: GetDialogStyles = theme => {
  return {
    bodyStyle: {
      maxHeight: 400,
    },
    containerStyle: {
      backgroundColor: 'white',
      borderRadius: theme.controlBorderRadius.medium,
      elevation: 1,

      /**
       * On iOs the navigation bar and bottom bar take roughly 10% each, maxHeight offsets
       * that amount so that it does not overflow the window
       */
      maxHeight: '80%',
      maxWidth: 600,
      minWidth: 280,
      position: 'relative',
      zIndex: 1,
    },
    contentContainerStyle: {},
    modalContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    overlayStyle: {},
  };
};
