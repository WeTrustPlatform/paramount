import { ViewStyle } from 'react-native';

import { IPopoverVariables } from '../component-variables/popoverVariables';

export interface IPopoverStyles {
  containerStyle: ViewStyle;
  popoverStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}

export type GetPopoverStyles = () => IPopoverStyles;

export const getPopoverStyles = (
  popoverVariables: IPopoverVariables,
): GetPopoverStyles => () => {
  return {
    containerStyle: popoverVariables.container,
    modalContainerStyle: popoverVariables.modalContainer,
    overlayStyle: popoverVariables.overlay,
    popoverStyle: popoverVariables.popover,
  };
};
