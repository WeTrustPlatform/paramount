import { Platform } from 'react-native';

import { FontFamilies } from '../../ThemeInterface';

export const fontFamilies: FontFamilies =
  Platform.OS === 'web'
    ? // Use system font on the Web
      {
        heading: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`,
        text: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      }
    : // Use default font families by React Native by default. Setting it to undefined will use the default font
      {
        heading: undefined,
        mono: undefined,
        text: undefined,
      };

export default fontFamilies;
