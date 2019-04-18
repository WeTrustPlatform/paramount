import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  DividerPosition,
  DividerStyles,
  GetDividerStyles,
  getDividerStyles,
} from './Divider.styles';

export interface DividerProps {
  size?: number;
  color?: string;
  position?: DividerPosition;
  getStyles?: ReplaceReturnType<GetDividerStyles, DeepPartial<DividerStyles>>;
}

export const Divider = (props: DividerProps) => {
  const { size, color, position = 'horizontal', getStyles } = props;
  const theme = useTheme();

  const { dividerStyle } = mergeStyles(getDividerStyles, getStyles)(
    { size, color, position },
    theme,
  );

  return <View style={dividerStyle} />;
};
