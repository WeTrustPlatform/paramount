import { Platform, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { ToastProviderProps } from './ToastProvider';

export interface ToastStyles {
  containerStyle: ViewStyle;
  wrapperStyle: ViewStyle;
}

export type GetToastStyles = (
  props: ToastProviderProps,
  theme: Theme,
) => Partial<ToastStyles>;

// @ts-ignore: Compat with web
export const getToastStyles: GetToastStyles = (props, theme) => {
  const { position = 'top' } = props;

  return {
    containerStyle: {
      left: 32,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      maxWidth: 560,
      // @ts-ignore: Compat with web
      position: Platform.OS === 'web' ? 'fixed' : 'absolute',
      right: 32,
      ...(position === 'top'
        ? {
            top: 0,
          }
        : {
            bottom: 68,
          }),
      zIndex: 100,
    },
    wrapperStyle: {
      position: 'absolute',
      width: '100%',
    },
  };
};
