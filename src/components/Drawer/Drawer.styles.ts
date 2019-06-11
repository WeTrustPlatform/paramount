import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

export interface DrawerStyles {
  containerStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}
export type GetDrawerStyles = (props: {}, theme: Theme) => DrawerStyles;

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
  };
};
