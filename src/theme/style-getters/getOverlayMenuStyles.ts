import { ViewStyle } from 'react-native';

import { OverlayMenuVariables } from '../component-variables/overlayMenuVariables';

export interface OverlayMenuStyles {
  bodyStyle: ViewStyle;
  containerStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetOverlayMenuStyles = () => OverlayMenuStyles;

export const getOverlayMenuStyles = (
  overlayMenuVariables: OverlayMenuVariables,
): GetOverlayMenuStyles => () => {
  return {
    bodyStyle: overlayMenuVariables.body,
    containerStyle: overlayMenuVariables.container,
    modalContainerStyle: overlayMenuVariables.modalContainer,
    overlayStyle: overlayMenuVariables.overlay,
  };
};
