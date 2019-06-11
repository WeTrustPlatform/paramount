import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

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
  return {
    overlayStyle: {
      backgroundColor: transparent
        ? 'transparent'
        : theme.colors.background.overlay,
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
