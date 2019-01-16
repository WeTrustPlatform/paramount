import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface PopoverVariables {
  popover: ViewStyle;
}

export const getPopoverVariables = (theme: Theme): PopoverVariables => {
  return {
    popover: {
      backgroundColor: theme.colors.background.plain,
      padding: 16,
      ...theme.elevations[2],
    },
  };
};

export interface PopoverStyles {
  popoverStyle: TextStyle;
}

export type GetPopoverStyles = (theme: Theme) => PopoverStyles;

export const getPopoverStyles: GetPopoverStyles = theme => {
  const popoverVariables = getPopoverVariables(theme);

  return {
    popoverStyle: popoverVariables.popover,
  };
};
