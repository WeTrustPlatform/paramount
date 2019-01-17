import { TextStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

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

export const getHeadingVariables = (theme: Theme): HeadingVariables => {
  return {
    size: {
      xxxlarge: {
        color: theme.colors.text.dark,
        fontFamily: theme.fontFamilies.heading,
        fontSize: theme.headingSizes.xxxlarge,
        fontWeight: '600',
        letterSpacing: -0.2,
        lineHeight: 40,
      },

      xxlarge: {
        color: theme.colors.text.dark,
        fontFamily: theme.fontFamilies.heading,
        fontSize: theme.headingSizes.xxlarge,
        fontWeight: '600',
        letterSpacing: -0.2,
        lineHeight: 32,
      },

      xlarge: {
        color: theme.colors.text.dark,
        fontFamily: theme.fontFamilies.heading,
        fontSize: theme.headingSizes.xlarge,
        fontWeight: '600',
        letterSpacing: -0.07,
        lineHeight: 28,
      },

      large: {
        color: theme.colors.text.dark,
        fontFamily: theme.fontFamilies.heading,
        fontSize: theme.headingSizes.large,
        fontWeight: '600',
        letterSpacing: -0.07,
        lineHeight: 24,
      },

      medium: {
        color: theme.colors.text.dark,
        fontFamily: theme.fontFamilies.heading,
        fontSize: theme.headingSizes.medium,
        fontWeight: '600',
        letterSpacing: -0.05,
        lineHeight: 20,
      },

      small: {
        color: theme.colors.text.dark,
        fontFamily: theme.fontFamilies.heading,
        fontSize: theme.headingSizes.small,
        fontWeight: '600',
        letterSpacing: -0.05,
        lineHeight: 20,
      },
    },
  };
};

export interface HeadingStyles {
  headingStyle: TextStyle;
}

export interface HeadingStylesProps {
  size: HeadingSize;
}

export type GetHeadingStyles = (
  headingStylesProps: HeadingStylesProps,
  theme: Theme,
) => HeadingStyles;

export const getHeadingStyles: GetHeadingStyles = ({ size }, theme) => {
  const headingVariables = getHeadingVariables(theme);

  return {
    headingStyle: headingVariables.size[size],
  };
};
