import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface DialogVariables {
  body: ViewStyle;
  container: ViewStyle;
  modalContainer: ViewStyle;
  overlay: ViewStyle & { cursor?: string };
}

export const getDialogVariables = (theme: Theme): DialogVariables => {
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
      backgroundColor: theme.colors.background.overlay,
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

export interface DialogStyles {
  bodyStyle: ViewStyle;
  containerStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetDialogStyles = (theme: Theme) => DialogStyles;

export const getDialogStyles: GetDialogStyles = theme => {
  const dialogVariables = getDialogVariables(theme);

  return {
    bodyStyle: dialogVariables.body,
    containerStyle: dialogVariables.container,
    modalContainerStyle: dialogVariables.modalContainer,
    overlayStyle: dialogVariables.overlay,
  };
};
