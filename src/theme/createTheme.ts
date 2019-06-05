import deepMerge from 'deepmerge';
import { DeepPartial } from 'ts-essentials';

import { defaultTheme } from './default-theme';
import { Theme } from './ThemeInterface';

export const createTheme = (theme?: DeepPartial<Theme>): Theme => {
  return theme
    ? deepMerge<Theme>(defaultTheme, theme as Partial<Theme>)
    : defaultTheme;
};
