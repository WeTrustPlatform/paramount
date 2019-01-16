import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface PositionerVariables {
  positioner: ViewStyle;
  modalContainer: ViewStyle;
  overlay: ViewStyle & { cursor?: string };
}

export const getPositionerVariables = (theme: Theme): PositionerVariables => {
  return {
    modalContainer: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    overlay: {
      backgroundColor: 'transparent',
      bottom: 0,
      cursor: 'auto',
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%',
    },
    positioner: {
      position: 'absolute',
      zIndex: 1,
    },
  };
};

export interface PositionerStyles {
  positionerStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}

export type GetPositionerStyles = (theme: Theme) => PositionerStyles;

export const getPositionerStyles: GetPositionerStyles = theme => {
  const positionerVariables = getPositionerVariables(theme);

  return {
    modalContainerStyle: positionerVariables.modalContainer,
    overlayStyle: positionerVariables.overlay,
    positionerStyle: positionerVariables.positioner,
  };
};
