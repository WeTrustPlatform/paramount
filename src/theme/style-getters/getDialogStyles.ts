import { ViewStyle } from 'react-native';

import { IDialogVariables } from '../component-variables/dialogVariables';

export interface DialogStyles {
  bodyStyle: ViewStyle;
  containerStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetDialogStyles = () => DialogStyles;

export const getDialogStyles = (
  dialogVariables: IDialogVariables,
): GetDialogStyles => () => {
  return {
    bodyStyle: dialogVariables.body,
    containerStyle: dialogVariables.container,
    modalContainerStyle: dialogVariables.modalContainer,
    overlayStyle: dialogVariables.overlay,
  };
};
