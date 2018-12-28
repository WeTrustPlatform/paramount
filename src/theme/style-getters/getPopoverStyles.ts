import { ViewStyle } from 'react-native';

import { PopoverVariables } from '../component-variables/popoverVariables';

export interface PopoverStyles {
  popoverStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}

export type GetPopoverStyles = () => PopoverStyles;

export const getPopoverStyles = (
  popoverVariables: PopoverVariables,
): GetPopoverStyles => () => {
  return {
    modalContainerStyle: popoverVariables.modalContainer,
    overlayStyle: popoverVariables.overlay,
    popoverStyle: popoverVariables.popover,
  };
};
