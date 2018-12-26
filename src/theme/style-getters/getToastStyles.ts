import { TextStyle, ViewStyle } from 'react-native';

import { Intent } from '../../constants/Intent';
import { ToastVariables } from '../component-variables/toastVariables';

export type GetToastStyles = (
  intent: Intent,
) => {
  containerStyle: ViewStyle;
  toastStyle: ViewStyle;
  textStyle: TextStyle;
};

export const getToastStyles = (
  toastVariables: ToastVariables,
): GetToastStyles => intent => {
  let toastStyle: ViewStyle;
  let textStyle: TextStyle;

  switch (intent) {
    case 'success':
      toastStyle = toastVariables.backgroundSuccess;
      textStyle = toastVariables.textSuccess;
      break;
    case 'warning':
      toastStyle = toastVariables.backgroundWarning;
      textStyle = toastVariables.textWarning;
      break;
    case 'danger':
      toastStyle = toastVariables.backgroundDanger;
      textStyle = toastVariables.textDanger;
      break;
    default:
      toastStyle = toastVariables.backgroundInfo;
      textStyle = toastVariables.textInfo;
      break;
  }

  return {
    containerStyle: toastVariables.container,
    textStyle,
    toastStyle: {
      ...toastVariables.base,
      ...toastStyle,
    },
  };
};
