import { TextStyle } from 'react-native';

import {
  FontFamilies,
  FontFamily,
  TextColor,
  TextColors,
  Theme,
} from '../../theme/ThemeInterface';
import { TextAlign, TextTransform } from './types';

export interface TextSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}

export type TextSize = keyof TextSizes;

export interface TextVariables {
  color: TextColors;
  size: TextSizes;
  fontFamily: FontFamilies;
}

export const getTextVariables = (theme: Theme): TextVariables => {
  return {
    size: {
      large: {
        fontSize: theme.textSizes.large,
        fontWeight: '400',
        letterSpacing: -0.07,
        lineHeight: 24,
      },

      // Default
      medium: {
        fontSize: theme.textSizes.medium,
        fontWeight: '400',
        letterSpacing: -0.05,
        lineHeight: 20,
      },

      small: {
        fontSize: theme.textSizes.small,
        fontWeight: '400',
        letterSpacing: -0.05,
        lineHeight: 20,
      },
    },

    color: theme.colors.text,
    fontFamily: theme.fontFamilies,
  };
};

export interface TextStylesProps {
  isBold: boolean;
  isItalic: boolean;
  size: TextSize;
  color: TextColor;
  align: TextAlign;
  transform?: TextTransform;
  fontFamily: FontFamily;
  isInline: boolean;
}

export interface TextStyles {
  textStyle: TextStyle;
}

export type GetTextStyles = (
  textStylesProps: TextStylesProps,
  theme: Theme,
) => TextStyles;

export const getFontFamily = (fontFamilies: FontFamilies) => (
  fontFamily: FontFamily,
) => fontFamilies[fontFamily];
export const getTextColor = (textColors: TextColors) => (
  textColor: TextColor,
) => textColors[textColor];

export const getTextStyles: GetTextStyles = (
  { size, color, fontFamily, isInline, isBold, isItalic, align, transform },
  theme,
) => {
  const textVariables = getTextVariables(theme);

  return {
    textStyle: {
      color: getTextColor(textVariables.color)(color),
      fontFamily: getFontFamily(textVariables.fontFamily)(fontFamily),
      textAlign: align,
      ...(isInline
        ? {
            alignSelf: 'flex-start',
            flexDirection: 'row',
          }
        : {}),
      ...textVariables.size[size],
      ...(isBold && {
        fontWeight: '600',
      }),
      ...(isItalic && {
        fontStyle: 'italic',
      }),
      ...(transform && {
        textTransform: transform,
      }),
    },
  };
};
