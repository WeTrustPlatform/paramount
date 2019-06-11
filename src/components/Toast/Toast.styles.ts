import { Platform, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

export interface ToastStyles {
  containerStyle: ViewStyle;
  wrapperStyle: ViewStyle;
}
export type GetToastStyles = (props: {}, theme: Theme) => ToastStyles;

// @ts-ignore: Compat with web
export const getToastStyles: GetToastStyles = (props, theme) => {
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
      top: 10,
      zIndex: 100,
    },
    wrapperStyle: {
      position: 'absolute',
      width: '100%',
    },
  };
};
