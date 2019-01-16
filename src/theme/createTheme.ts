// @ts-ignore
import deepMerge from 'deepmerge';
import { DeepPartial } from 'ts-essentials';

import { defaultTheme } from './default-theme';
import { Theme } from './ThemeInterface';

export const createTheme = (
  theme: DeepPartial<Theme> = defaultTheme,
): Theme => {
  // @ts-ignore
  return deepMerge(defaultTheme, theme);
};
