import { TextStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface DividerStyles {
  dividerStyle: TextStyle;
}

export type DividerPosition = 'horizontal' | 'vertical';

export interface DividerStylesProps {
  size?: number;
  color?: string;
  position?: DividerPosition;
}

export type GetDividerStyles = (
  dividerStylesProps: DividerStylesProps,
  theme: Theme,
) => DividerStyles;

export const getDividerStyles: GetDividerStyles = (
  { size, color, position },
  theme,
) => {
  const styleMap = {
    horizontal: {
      backgroundColor: color || theme.colors.border.default,
      height: size || 1,
      width: '100%',
    },
    vertical: {
      backgroundColor: color || theme.colors.border.default,
      height: '100%',
      width: size || 1,
    },
  };

  return {
    dividerStyle: position ? styleMap[position] : styleMap.horizontal,
  };
};
