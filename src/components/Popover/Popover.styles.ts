import { TextStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';
import {
  getPositionerStyles,
  PositionerStyles,
} from '../Positioner/Positioner.styles';

export interface PopoverStyles extends PositionerStyles {
  popoverStyle: TextStyle;
}

export type GetPopoverStyles = (props: {}, theme: Theme) => PopoverStyles;

export const getPopoverStyles: GetPopoverStyles = (props, theme) => {
  return {
    popoverStyle: {
      backgroundColor: theme.colors.background.content,
      padding: 16,
      ...theme.elevations[2],
    },
    ...getPositionerStyles({}, theme),
  };
};
