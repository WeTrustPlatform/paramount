import { ViewStyle } from 'react-native';

import { Intent } from '../../constants/Intent';
import { ToastVariables } from '../component-variables/toastVariables';

export type GetToastStyles = (
  intent: Intent,
) => {
  containerStyle: ViewStyle;
};

export const getToastStyles = (
  toastVariables: ToastVariables,
): GetToastStyles => intent => {
  return {
    containerStyle: toastVariables.container,
  };
};
