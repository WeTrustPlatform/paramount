import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Positioner, PositionerProps } from '../Positioner';
import {
  GetPopoverStyles,
  getPopoverStyles,
  PopoverStyles,
} from './Popover.styles';

export interface PopoverProps extends PositionerProps {
  getContentStyles?: ReplaceReturnType<
    GetPopoverStyles,
    DeepPartial<PopoverStyles>
  >;
}

const PopoverBase = (props: PopoverProps) => {
  const { content, theme, getContentStyles } = props;
  const { popoverStyle } = mergeStyles(getPopoverStyles, getContentStyles)(
    theme,
  );

  return (
    <Positioner
      {...props}
      content={params => <View style={popoverStyle}>{content(params)}</View>}
    />
  );
};

export const Popover = withTheme(PopoverBase);
