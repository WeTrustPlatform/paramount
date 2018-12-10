import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { ITheme, withTheme } from '../../theme';

export interface IDividerProps {
  theme: ITheme;
  size?: number;
  color?: string;
  radius?: number;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: {
    dividerStyle?: ViewStyle;
  };
}

const DividerBase = (props: IDividerProps) => {
  const { theme, size, color, radius, dangerouslySetInlineStyle } = props;
  const { dividerStyle } = theme.getDividerStyles(size, color, radius);

  return (
    <View
      style={{
        ...dividerStyle,
        ...(dangerouslySetInlineStyle &&
          dangerouslySetInlineStyle.dividerStyle),
      }}
    />
  );
};

export const Divider = withTheme(DividerBase);
export default Divider;
