import * as React from 'react';

import { defaultTheme } from './default-theme';

const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
} = React.createContext(defaultTheme);

export { ThemeProvider, ThemeConsumer };
