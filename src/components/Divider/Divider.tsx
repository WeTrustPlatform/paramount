import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  DividerStyles,
  GetDividerStyles,
  getDividerStyles,
} from './Divider.styles';

export interface DividerProps {
  theme: Theme;
  size?: number;
  color?: string;
  radius?: number;
  getStyles?: ReplaceReturnType<GetDividerStyles, DeepPartial<DividerStyles>>;
}

const DividerBase = (props: DividerProps) => {
  const { theme, size, color, radius, getStyles } = props;
  const { dividerStyle } = mergeStyles(getDividerStyles, getStyles)(
    { size, color, radius },
    theme,
  );

  return <View style={dividerStyle} />;
};

export const Divider = withTheme(DividerBase);
export default Divider;
