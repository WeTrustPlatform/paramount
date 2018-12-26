import { ThemeVariables } from '../ThemeInterface';

export interface DividerVariables {
  color: string;
  size: number;
  radius: number;
}

export const getDividerVariables = (
  themeVariables: ThemeVariables,
): DividerVariables => {
  return {
    color: themeVariables.colors.border.default,
    radius: 6,
    size: 1,
  };
};
