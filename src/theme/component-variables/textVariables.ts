import { TextStyle } from 'react-native';

import { FontFamilies, TextColors, ThemeVariables } from '../ThemeInterface';

export interface TextSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}

export interface ColorVariations {
  lightest: string;
  light: string;
  base: string;
  dark: string;
  darkest: string;
}

export type TextSize = keyof TextSizes;

export interface TextVariables {
  color: TextColors;
  size: TextSizes;
  fontFamily: FontFamilies;
}

export const getTextVariables = (
  themeVariables: ThemeVariables,
): TextVariables => {
  return {
    size: {
      /**
       * It's useful to have xlarge because `Link` uses the `Text` component.
       * A `Link` could be used as xlarge in the context of a breadcrumb.
       */
      large: {
        fontSize: themeVariables.textSizes.large,
        fontWeight: '400',
        letterSpacing: -0.07,
        lineHeight: 24,
      },

      // Default
      medium: {
        fontSize: themeVariables.textSizes.medium,
        fontWeight: '400',
        letterSpacing: -0.05,
        lineHeight: 20,
      },

      small: {
        fontSize: themeVariables.textSizes.small,
        fontWeight: '400',
        letterSpacing: -0.05,
        lineHeight: 20,
      },
    },

    color: themeVariables.colors.text,
    fontFamily: themeVariables.fontFamilies,
  };
};
