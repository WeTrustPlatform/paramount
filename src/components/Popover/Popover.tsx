import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Positioner, PositionerProps } from '../Positioner';
import {
  GetPopoverStyles,
  getPopoverStyles,
  PopoverStyles,
} from './Popover.styles';

export interface PopoverProps extends PositionerProps {
  getStyles?: ReplaceReturnType<GetPopoverStyles, DeepPartial<PopoverStyles>>;
}

export const Popover = (props: PopoverProps) => {
  const { content, getStyles, ...restProps } = props;
  const theme = useTheme();
  const { popoverStyle, modalContainerStyle, positionerStyle } = mergeStyles(
    getPopoverStyles,
    getStyles,
    theme.components.getPopoverStyles,
  )({}, theme);

  return (
    <Positioner
      {...restProps}
      getStyles={() => ({ modalContainerStyle, positionerStyle })}
      content={params => <View style={popoverStyle}>{content(params)}</View>}
    />
  );
};
