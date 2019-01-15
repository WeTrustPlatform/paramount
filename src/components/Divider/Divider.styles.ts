import { TextStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface DividerVariables {
  color: string;
  size: number;
  radius: number;
}

export const getDividerVariables = (theme: Theme): DividerVariables => {
  return {
    color: theme.colors.border.default,
    radius: 6,
    size: 1,
  };
};

export interface DividerStyles {
  dividerStyle: TextStyle;
}

export interface DividerStylesProps {
  size?: number;
  color?: string;
  radius?: number;
}

export type GetDividerStyles = (
  dividerStylesProps: DividerStylesProps,
  theme: Theme,
) => DividerStyles;

export const getDividerStyles: GetDividerStyles = (
  { size, color, radius },
  theme,
) => {
  const dividerVariables = getDividerVariables(theme);

  return {
    dividerStyle: {
      backgroundColor: color || dividerVariables.color,
      borderRadius: radius || dividerVariables.radius,
      height: size || dividerVariables.size,
      width: '100%',
    },
  };
};
