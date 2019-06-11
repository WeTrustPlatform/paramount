import { TextStyle } from 'react-native';

import {
  FontFamily,
  FontWeight,
  ParagraphSize,
  ParagraphSizes,
  TextColor,
  Theme,
} from '../../theme/Theme';
import { getFontFamily, getFontWeight, getTextColor } from './Text.styles';
import { TextAlign } from './types';

export interface ParagraphStylesProps {
  align: TextAlign;
  size: ParagraphSize;
  color: TextColor;
  fontFamily: FontFamily;
  weight?: FontWeight;
}

export interface ParagraphStyles {
  paragraphStyle: TextStyle;
}

export type GetParagraphStyles = (
  paragraphStylesProps: ParagraphStylesProps,
  theme: Theme,
) => ParagraphStyles;

export const getParagraphSize = (paragraphSizes: ParagraphSizes) => (
  size: ParagraphSize,
): TextStyle => {
  // @ts-ignore
  const presetParagraphSize = paragraphSizes[size] as TextStyle;

  return presetParagraphSize || { fontSize: size };
};

export const getParagraphStyles: GetParagraphStyles = (
  { size, color, fontFamily, align, weight },
  theme,
) => {
  const sizeStyle = getParagraphSize(theme.paragraphSizes)(size);

  return {
    paragraphStyle: {
      ...sizeStyle,
      color: getTextColor(theme.colors.text)(color),
      fontFamily: getFontFamily(theme.fontFamilies)(fontFamily),
      fontWeight:
        getFontWeight(theme.fontWeights)(weight) || sizeStyle.fontWeight,
      marginBottom: '1em',
      marginTop: '1em',
      textAlign: align,
    },
  };
};
