import { TextStyle } from 'react-native';

import { BorderColor, BorderColors, Theme } from '../../theme/Theme';

export interface DividerStyles {
  dividerStyle: TextStyle;
}

export type DividerPosition = 'horizontal' | 'vertical';

export interface DividerStylesProps {
  size?: number;
  color?: BorderColor;
  position?: DividerPosition;
}

export type GetDividerStyles = (
  dividerStylesProps: DividerStylesProps,
  theme: Theme,
) => DividerStyles;

export const getDividerColor = (borderColors: BorderColors) => (
  borderColor: BorderColor,
) => {
  // @ts-ignore
  const presetColor = borderColors[borderColor] as string | undefined;

  return presetColor || borderColor;
};

export const getDividerStyles: GetDividerStyles = (
  { size, color, position },
  theme,
) => {
  const backgroundColor = getDividerColor(theme.colors.border)(
    color || theme.colors.border.default,
  );

  const styleMap = {
    horizontal: {
      backgroundColor,
      height: size || 1,
      width: '100%',
    },
    vertical: {
      backgroundColor,
      height: '100%',
      width: size || 1,
    },
  };

  return {
    dividerStyle: position ? styleMap[position] : styleMap.horizontal,
  };
};
