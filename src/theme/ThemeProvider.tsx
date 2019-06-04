import * as React from 'react';
import { DeepPartial } from 'ts-essentials';

import { createTheme } from './createTheme';
import { defaultTheme } from './default-theme';
import { ThemeContext } from './ThemeContext';
import { Theme } from './ThemeInterface';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  value?: DeepPartial<Theme>;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, value = defaultTheme } = props;

  const theme = createTheme(value);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
