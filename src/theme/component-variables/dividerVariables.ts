import { IThemeVariables } from '../ThemeInterface';

export interface IDividerVariables {
  color: string;
  size: number;
  radius: number;
}

export const getDividerVariables = (
  themeVariables: IThemeVariables,
): IDividerVariables => {
  return {
    color: themeVariables.colors.border.default,
    radius: 6,
    size: 1,
  };
};
