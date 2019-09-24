import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import {
  getPositionerStyles,
  PositionerStyleProps,
  PositionerStyles,
} from '../Positioner/Positioner.styles';

export interface PopoverStyles extends PositionerStyles {
  popoverStyle: ViewStyle;
}

export type GetPopoverStyles = (
  props: PositionerStyleProps,
  theme: Theme,
) => Partial<PopoverStyles>;

export const getPopoverStyles: GetPopoverStyles = (props, theme) => {
  return {
    popoverStyle: {
      backgroundColor: theme.colors.background.content,
      padding: 16,
      ...theme.elevations[2],
    },
    ...getPositionerStyles(props, theme),
  };
};
