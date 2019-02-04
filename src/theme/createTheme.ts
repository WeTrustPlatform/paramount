import { DeepPartial } from 'ts-essentials';

import { defaultTheme } from './default-theme';
import { Theme } from './ThemeInterface';

// tslint:disable-next-line
const deepMerge = require('deepmerge');

export const createTheme = (
  theme: DeepPartial<Theme> = defaultTheme,
): Theme => {
  // @ts-ignore
  return deepMerge(defaultTheme, theme);
};
