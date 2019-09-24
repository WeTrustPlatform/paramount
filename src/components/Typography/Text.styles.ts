import { TextStyle } from 'react-native';

import {
  FontWeight,
  FontWeights,
  RNFontWeight,
  TextColor,
  TextColors,
  TextSize,
  TextSizes,
  Theme,
} from '../../theme/Theme';
import { TextProps } from './Text';

export interface TextStyles {
  textStyle: TextStyle;
}

export type GetTextStyles = (
  props: TextProps,
  theme: Theme,
) => Partial<TextStyles>;

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
  {
    color = 'default',
    size = 'medium',
    align = 'left',
    weight,
    isItalic = false,
    transform,
  },
  theme,
) => {
  const sizeStyle = getTextSize(theme.textSizes)(size);

  return {
    textStyle: {
      ...sizeStyle,
      color: getTextColor(theme.colors.text)(color),
      fontFamily: theme.fontFamilies.text,
      fontWeight:
        getFontWeight(theme.fontWeights)(weight) || sizeStyle.fontWeight,
      textAlign: align,
      ...(isItalic && {
        fontStyle: 'italic',
      }),
      ...(transform && {
        textTransform: transform,
      }),
    },
  };
};
