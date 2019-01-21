import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface OverlayVariables {
  overlay: ViewStyle & { cursor?: string };
}

export const getOverlayVariables = (theme: Theme): OverlayVariables => {
  return {
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
  };
};

export interface OverlayStyles {
  overlayStyle: ViewStyle;
}

export type GetOverlayStyles = (theme: Theme) => OverlayStyles;

export const getOverlayStyles: GetOverlayStyles = theme => {
  const overlayVariables = getOverlayVariables(theme);

  return {
    overlayStyle: overlayVariables.overlay,
  };
};
