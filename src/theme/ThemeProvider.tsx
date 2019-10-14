import deepMerge from 'deepmerge';
import React from 'react';

import { LayoutProvider } from '../components/Layout/LayoutProvider';
import { ToastProvider } from '../components/Toast/ToastProvider';
import { DeepPartial } from '../utils/types';
import { defaultTheme } from './defaultTheme';
import { Theme } from './Theme';

export const ThemeContext = React.createContext(defaultTheme);

export interface ThemeProviderProps {
  children?: React.ReactNode;
  value?: DeepPartial<Theme>;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, value } = props;

  const theme = value
    ? (deepMerge(defaultTheme, value) as Theme)
    : defaultTheme;

  return (
    <ThemeContext.Provider value={theme}>
      <LayoutProvider value={theme.layout}>
        <ToastProvider>{children}</ToastProvider>
      </LayoutProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
