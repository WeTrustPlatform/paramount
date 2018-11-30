import { TextStyle, ViewStyle } from 'react-native';

import { IntentType } from '../../constants/Intent';
import { IToastVariables } from '../component-variables/toastVariables';

export type GetToastStyles = (
  intent: IntentType,
) => {
  containerStyle: ViewStyle;
  toastStyle: ViewStyle;
  textStyle: TextStyle;
};

export const getToastStyles = (
  toastVariables: IToastVariables,
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
