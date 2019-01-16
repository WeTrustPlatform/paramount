import * as React from 'react';
import { View } from 'react-native';

import { withTheme } from '../../theme';
import { Positioner, PositionerProps } from '../Positioner';
import { getPopoverStyles } from './Popover.styles';

const PopoverBase = (props: PositionerProps) => {
  const { content, theme } = props;
  const { popoverStyle } = getPopoverStyles(theme);

  return (
    <Positioner
      {...props}
      content={params => <View style={popoverStyle}>{content(params)}</View>}
    />
  );
};

export const Popover = withTheme(PopoverBase);
