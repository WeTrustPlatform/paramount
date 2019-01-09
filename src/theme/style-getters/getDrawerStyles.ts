import { ViewStyle } from 'react-native';

import { DrawerVariables } from '../component-variables/drawerVariables';

export interface DrawerStyles {
  containerStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetDrawerStyles = () => DrawerStyles;

export const getDrawerStyles = (
  drawerVariables: DrawerVariables,
): GetDrawerStyles => () => {
  return {
    containerStyle: drawerVariables.container,
    modalContainerStyle: drawerVariables.modalContainer,
    overlayStyle: drawerVariables.overlay,
  };
};
