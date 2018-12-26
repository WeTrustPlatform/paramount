import { getComponentVariables } from './component-variables';
import { defaultThemeVariables } from './default-theme';
import { getStyleGetters } from './style-getters';
import { ComponentVariables, Theme, ThemeVariables } from './ThemeInterface';

export const createTheme = (
  themeVariables: Partial<ThemeVariables> = defaultThemeVariables,
  componentVariables: Partial<ComponentVariables> = {},
): Theme => {
  const finalThemeVariables = {
    ...defaultThemeVariables,
    ...themeVariables,
  };

  const finalComponentVariables = {
    ...getComponentVariables(finalThemeVariables),
    ...componentVariables,
  };

  return {
    componentVariables: finalComponentVariables,
    themeVariables: finalThemeVariables,
    ...getStyleGetters(finalComponentVariables),
  };
};
