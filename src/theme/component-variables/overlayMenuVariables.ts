import { ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

export interface OverlayMenuVariables {
  body: ViewStyle;
  container: ViewStyle;
  modalContainer: ViewStyle;
  overlay: ViewStyle & { cursor?: string };
}

export const getOverlayMenuVariables = (
  themeVariables: ThemeVariables,
): OverlayMenuVariables => {
  return {
    body: {
      maxHeight: 400,
      overflow: 'scroll',
    },
    container: {
      height: '100%',
      position: 'absolute',
      width: '100%',
      zIndex: 1,
    },
    modalContainer: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    overlay: {
      backgroundColor: themeVariables.colors.background.overlay,
      bottom: 0,
      cursor: 'auto',
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%',
    },
  };
};
