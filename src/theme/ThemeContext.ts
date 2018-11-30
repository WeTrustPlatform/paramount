import * as React from 'react';

import { createTheme } from './createTheme';

const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
} = React.createContext(createTheme());

export { ThemeProvider, ThemeConsumer };
