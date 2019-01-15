import * as React from 'react';
import { View } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { GetDividerStyles, getDividerStyles } from './Divider.styles';

export interface DividerProps {
  theme: Theme;
  size?: number;
  color?: string;
  radius?: number;
  getStyles?: GetDividerStyles;
}

const DividerBase = (props: DividerProps) => {
  const { theme, size, color, radius, getStyles = getDividerStyles } = props;
  const { dividerStyle } = getStyles({ size, color, radius }, theme);

  return <View style={dividerStyle} />;
};

export const Divider = withTheme(DividerBase);
export default Divider;
