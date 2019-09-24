import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Positioner, PositionerProps } from '../Positioner';
import { GetPopoverStyles, getPopoverStyles } from './Popover.styles';

export interface PopoverProps extends PositionerProps {
  /** Callback to get element styles. */
  getStyles?: GetPopoverStyles;
}

export const Popover = (props: PopoverProps) => {
  const { content, getStyles, ...restProps } = props;
  const theme = useTheme();
  const { popoverStyle } = mergeStyles(
    getPopoverStyles,
    getStyles,
    theme.components.getPopoverStyles,
  )({ isPositionerMeasurementsMeasured: false }, theme);

  return (
    <Positioner
      {...restProps}
      getStyles={getStyles}
      content={<View style={popoverStyle}>{content}</View>}
    />
  );
};
