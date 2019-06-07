import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface PositionerStyles {
  positionerStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}

export type GetPositionerStyles = (props: {}, theme: Theme) => PositionerStyles;

export const getPositionerStyles: GetPositionerStyles = (props, theme) => {
  return {
    modalContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    positionerStyle: {
      position: 'absolute',
      zIndex: 1,
    },
  };
};
