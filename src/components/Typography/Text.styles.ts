import { TextStyle } from 'react-native';

import {
  FontFamilies,
  FontFamily,
  FontWeight,
  FontWeights,
  RNFontWeight,
  TextColor,
  TextColors,
  TextSize,
  TextSizes,
  Theme,
} from '../../theme/Theme';
import { TextAlign, TextTransform } from './types';

export interface TextStylesProps {
  isItalic: boolean;
  size: TextSize;
  color: TextColor;
  align: TextAlign;
  transform?: TextTransform;
  fontFamily: FontFamily;
  isInline: boolean;
  weight?: FontWeight;
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
  fontWeight?: FontWeight,
): RNFontWeight | undefined => {
  if (!fontWeight) return;
  // @ts-ignore
  const presetFontWeight = fontWeights[fontWeight] as RNFontWeight | undefined;

  // @ts-ignore
  return presetFontWeight || fontWeight;
};

export const getTextColor = (textColors: TextColors) => (
  textColor: TextColor,
) => {
  // @ts-ignore
  const presetColor = textColors[textColor] as string | undefined;

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
  { size, color, fontFamily, isInline, isItalic, align, transform, weight },
  theme,
) => {
  const sizeStyle = getTextSize(theme.textSizes)(size);

  return {
    textStyle: {
      ...sizeStyle,
      color: getTextColor(theme.colors.text)(color),
      fontFamily: getFontFamily(theme.fontFamilies)(fontFamily),
      fontWeight:
        getFontWeight(theme.fontWeights)(weight) || sizeStyle.fontWeight,
      textAlign: align,
      ...(isInline
        ? {
            alignSelf: 'flex-start',
            flexDirection: 'row',
          }
        : {}),
      ...(isItalic && {
        fontStyle: 'italic',
      }),
      ...(transform && {
        textTransform: transform,
      }),
    },
  };
};
