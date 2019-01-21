import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface DrawerVariables {
  container: ViewStyle;
  modalContainer: ViewStyle;
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
  };
};

export interface DrawerStyles {
  containerStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetDrawerStyles = (theme: Theme) => DrawerStyles;

export const getDrawerStyles: GetDrawerStyles = theme => {
  const drawerVariables = getDrawerVariables(theme);

  return {
    containerStyle: drawerVariables.container,
    modalContainerStyle: drawerVariables.modalContainer,
  };
};
