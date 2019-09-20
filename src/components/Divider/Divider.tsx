import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { BorderColor, ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  DividerPosition,
  DividerStyles,
  GetDividerStyles,
  getDividerStyles,
} from './Divider.styles';

export interface DividerProps {
  /**
   * Size of the divider.
   * @default small
   */
  size?: ControlSize | number;

  /**
   * Color of the divider.
   * @default colors.border.default
   */
  color?: BorderColor | string;

  /**
   * Positioning of the divier
   * @default "horizontal"
   */
  position?: DividerPosition;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetDividerStyles, DeepPartial<DividerStyles>>;
}

export const Divider = (props: DividerProps) => {
  const { getStyles } = props;
  const theme = useTheme();

  const { dividerStyle } = mergeStyles(
    getDividerStyles,
    getStyles,
    theme.components.getDividerStyles,
  )(props, theme);

  return <View style={dividerStyle} />;
};
