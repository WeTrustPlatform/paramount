import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface DialogVariables {
  body: ViewStyle;
  container: ViewStyle;
  modalContainer: ViewStyle;
}

export const getDialogVariables = (theme: Theme): DialogVariables => {
  return {
    body: {
      maxHeight: 400,
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
  };
};

export interface DialogStyles {
  bodyStyle: ViewStyle;
  containerStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetDialogStyles = (theme: Theme) => DialogStyles;

export const getDialogStyles: GetDialogStyles = theme => {
  const dialogVariables = getDialogVariables(theme);

  return {
    bodyStyle: dialogVariables.body,
    containerStyle: dialogVariables.container,
    modalContainerStyle: dialogVariables.modalContainer,
  };
};
