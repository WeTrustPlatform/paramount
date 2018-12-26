import { TextStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

export interface HeadingSizes {
  xxxlarge: TextStyle; // h1
  xxlarge: TextStyle; // h2
  xlarge: TextStyle; // h3
  large: TextStyle; // h4
  medium: TextStyle; // h5
  small: TextStyle; // h6
}

export type HeadingSize = keyof HeadingSizes;

export interface HeadingVariables {
  size: HeadingSizes;
}

export const getHeadingVariables = (
  themeVariables: ThemeVariables,
): HeadingVariables => {
  return {
    size: {
      xxxlarge: {
        color: themeVariables.colors.text.dark,
        fontFamily: themeVariables.fontFamilies.heading,
        fontSize: themeVariables.headingSizes.xxxlarge,
        fontWeight: '600',
        letterSpacing: -0.2,
        lineHeight: 40,
      },

      xxlarge: {
        color: themeVariables.colors.text.dark,
        fontFamily: themeVariables.fontFamilies.heading,
        fontSize: themeVariables.headingSizes.xxlarge,
        fontWeight: '600',
        letterSpacing: -0.2,
        lineHeight: 32,
      },

      xlarge: {
        color: themeVariables.colors.text.dark,
        fontFamily: themeVariables.fontFamilies.heading,
        fontSize: themeVariables.headingSizes.xlarge,
        fontWeight: '600',
        letterSpacing: -0.07,
        lineHeight: 28,
      },

      large: {
        color: themeVariables.colors.text.dark,
        fontFamily: themeVariables.fontFamilies.heading,
        fontSize: themeVariables.headingSizes.large,
        fontWeight: '600',
        letterSpacing: -0.07,
        lineHeight: 24,
      },

      medium: {
        color: themeVariables.colors.text.dark,
        fontFamily: themeVariables.fontFamilies.text,
        fontSize: themeVariables.headingSizes.medium,
        fontWeight: '600',
        letterSpacing: -0.05,
        lineHeight: 20,
      },

      small: {
        color: themeVariables.colors.text.dark,
        fontFamily: themeVariables.fontFamilies.text,
        fontSize: themeVariables.headingSizes.small,
        fontWeight: '600',
        letterSpacing: -0.05,
        lineHeight: 20,
      },
    },
  };
};
