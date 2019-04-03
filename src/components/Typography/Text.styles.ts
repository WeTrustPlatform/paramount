import { TextStyle } from 'react-native';

import {
  FontFamilies,
  FontFamily,
  FontWeight,
  FontWeights,
  PresetTextColors,
  RNFontWeight,
  TextColor,
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
  size: TextSizes;
  fontFamily: FontFamilies;
}

export const getTextVariables = (theme: Theme): TextVariables => {
  return {
    size: {
      large: {
        fontSize: theme.textSizes.large,
      },

      medium: {
        fontSize: theme.textSizes.medium,
      },

      small: {
        fontSize: theme.textSizes.small,
      },
    },

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
  weight: FontWeight;
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

export const getFontWeight = (fontWeights: FontWeights) => (
  fontWeight: FontWeight,
): RNFontWeight => {
  // @ts-ignore
  const presetFontWeight = fontWeights[fontWeight] as RNFontWeight | undefined;

  // @ts-ignore
  return presetFontWeight || fontWeight;
};

export const getTextColor = (textColors: PresetTextColors) => (
  textColor: TextColor,
) => {
  const presetColor = textColors[textColor];

  return presetColor || textColor;
};

export const getTextStyles: GetTextStyles = (
  {
    size,
    color,
    fontFamily,
    isInline,
    isBold,
    isItalic,
    align,
    transform,
    weight,
  },
  theme,
) => {
  const textVariables = getTextVariables(theme);

  return {
    textStyle: {
      color: getTextColor(theme.colors.text)(color),
      fontFamily: getFontFamily(textVariables.fontFamily)(fontFamily),
      fontWeight: getFontWeight(theme.fontWeights)(weight),
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
