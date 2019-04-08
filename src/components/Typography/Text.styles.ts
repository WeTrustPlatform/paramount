import { TextStyle } from 'react-native';

import {
  FontFamilies,
  FontFamily,
  FontWeight,
  FontWeights,
  PresetTextColors,
  RNFontWeight,
  TextColor,
  TextSize,
  TextSizes,
  Theme,
} from '../../theme/ThemeInterface';
import { TextAlign, TextTransform } from './types';

export interface TextVariables {
  size: TextSizes;
  fontFamily: FontFamilies;
}

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
  // @ts-ignore
  const presetColor = textColors[textColor] as string;

  return presetColor || textColor;
};

export const getTextSize = (textSizes: TextSizes) => (
  size: TextSize,
): TextStyle => {
  // @ts-ignore
  const presetTextSize = textSizes[size] as TextStyle;

  return presetTextSize || { fontSize: size };
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
  return {
    textStyle: {
      ...getTextSize(theme.textSizes)(size),
      color: getTextColor(theme.colors.text)(color),
      fontFamily: getFontFamily(theme.fontFamilies)(fontFamily),
      fontWeight: getFontWeight(theme.fontWeights)(weight),
      textAlign: align,
      ...(isInline
        ? {
            alignSelf: 'flex-start',
            flexDirection: 'row',
          }
        : {}),
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
