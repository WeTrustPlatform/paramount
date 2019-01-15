import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface PopoverVariables {
  popover: ViewStyle;
  modalContainer: ViewStyle;
  overlay: ViewStyle & { cursor?: string };
}

export const getPopoverVariables = (theme: Theme): PopoverVariables => {
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
    popover: {
      backgroundColor: theme.colors.background.plain,
      position: 'absolute',
      zIndex: 1,
      ...theme.elevations[2],
    },
  };
};

export interface PopoverStyles {
  popoverStyle: ViewStyle;
  overlayStyle: ViewStyle;
  modalContainerStyle: ViewStyle;
}

export type GetPopoverStyles = (theme: Theme) => PopoverStyles;

export const getPopoverStyles: GetPopoverStyles = theme => {
  const popoverVariables = getPopoverVariables(theme);

  return {
    modalContainerStyle: popoverVariables.modalContainer,
    overlayStyle: popoverVariables.overlay,
    popoverStyle: popoverVariables.popover,
  };
};
