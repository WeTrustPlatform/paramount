import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface OverlayVariables {
  overlay: ViewStyle & { cursor?: string };
}

export const getOverlayVariables = (theme: Theme): OverlayVariables => {
  return {
    overlay: {
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

export interface OverlayStylesProps {
  transparent: boolean;
}

export type GetOverlayStyles = (
  { transparent }: OverlayStylesProps,
  theme: Theme,
) => OverlayStyles;

export const getOverlayStyles: GetOverlayStyles = ({ transparent }, theme) => {
  const overlayVariables = getOverlayVariables(theme);
  console.log('transparent', transparent);
  return {
    overlayStyle: {
      ...overlayVariables.overlay,
      backgroundColor: transparent
        ? 'transparent'
        : theme.colors.background.overlay,
    },
  };
};
