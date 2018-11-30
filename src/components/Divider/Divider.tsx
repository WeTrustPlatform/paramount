import * as React from 'react';
import { View } from 'react-native';

import { ITheme, withTheme } from '../../theme';

export interface IDividerProps {
  theme: ITheme;
  size?: number;
  color?: string;
  radius?: number;
}

const DividerWithoutTheme = ({ theme, size, color, radius }: IDividerProps) => {
  const { dividerStyle } = theme.getDividerStyles(size, color, radius);

  return <View style={dividerStyle} />;
};

export const Divider = withTheme(DividerWithoutTheme);
export default Divider;
