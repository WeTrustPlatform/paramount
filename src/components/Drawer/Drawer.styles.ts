import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface DrawerVariables {
  container: ViewStyle;
  modalContainer: ViewStyle;
  overlay: ViewStyle & { cursor?: string };
}

export const getDrawerVariables = (theme: Theme): DrawerVariables => {
  return {
    container: {
      position: 'absolute',
      width: '100%',
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

export interface DrawerStyles {
  containerStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetDrawerStyles = (theme: Theme) => DrawerStyles;

export const getDrawerStyles: GetDrawerStyles = theme => {
  const drawerVariables = getDrawerVariables(theme);

  return {
    containerStyle: drawerVariables.container,
    modalContainerStyle: drawerVariables.modalContainer,
    overlayStyle: drawerVariables.overlay,
  };
};
