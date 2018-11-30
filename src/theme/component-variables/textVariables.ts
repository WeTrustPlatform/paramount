import { TextStyle } from 'react-native';

import { IFontFamilies, ITextColors, IThemeVariables } from '../ThemeInterface';

export interface ITextSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}

export interface IColorVariations {
  lightest: string;
  light: string;
  base: string;
  dark: string;
  darkest: string;
}

export type TextSize = keyof ITextSizes;

export interface ITextVariables {
  color: ITextColors;
  size: ITextSizes;
  fontFamily: IFontFamilies;
}

export const getTextVariables = (
  themeVariables: IThemeVariables,
): ITextVariables => {
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
