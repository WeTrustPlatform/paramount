import { ViewStyle } from 'react-native';

import { DrawerMenuVariables } from '../component-variables/drawerMenuVariables';

export interface DrawerMenuStyles {
  bodyStyle: ViewStyle;
  containerStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetDrawerMenuStyles = () => DrawerMenuStyles;

export const getDrawerMenuStyles = (
  drawerMenuVariables: DrawerMenuVariables,
): GetDrawerMenuStyles => () => {
  return {
    bodyStyle: drawerMenuVariables.body,
    containerStyle: drawerMenuVariables.container,
    modalContainerStyle: drawerMenuVariables.modalContainer,
    overlayStyle: drawerMenuVariables.overlay,
  };
};
