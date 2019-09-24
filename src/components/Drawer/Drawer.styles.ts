import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { DrawerProps } from './Drawer';

export interface DrawerStyles {
  overlayStyle: ViewStyle;
  containerStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}

export type GetDrawerStyles = (
  props: DrawerProps,
  theme: Theme,
) => Partial<DrawerStyles>;

export const getDrawerStyles: GetDrawerStyles = (props, theme) => {
  return {
    containerStyle: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
    },
    modalContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    overlayStyle: {},
  };
};
