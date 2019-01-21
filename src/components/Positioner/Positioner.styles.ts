import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface PositionerVariables {
  positioner: ViewStyle;
  modalContainer: ViewStyle;
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
    positioner: {
      position: 'absolute',
      zIndex: 1,
    },
  };
};

export interface PositionerStyles {
  positionerStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}

export type GetPositionerStyles = (theme: Theme) => PositionerStyles;

export const getPositionerStyles: GetPositionerStyles = theme => {
  const positionerVariables = getPositionerVariables(theme);

  return {
    modalContainerStyle: positionerVariables.modalContainer,
    positionerStyle: positionerVariables.positioner,
  };
};
