import { getComponentVariables } from './component-variables';
import { defaultThemeVariables } from './default-theme';
import { getStyleGetters } from './style-getters';
import { IComponentVariables, ITheme, IThemeVariables } from './ThemeInterface';

export const createTheme = (
  themeVariables: Partial<IThemeVariables> = defaultThemeVariables,
  componentVariables: Partial<IComponentVariables> = {},
): ITheme => {
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
