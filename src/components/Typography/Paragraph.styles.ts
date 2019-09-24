import { TextStyle } from 'react-native';

import { ParagraphSize, ParagraphSizes, Theme } from '../../theme/Theme';
import { ParagraphProps } from './Paragraph';
import { getFontWeight, getTextColor } from './Text.styles';

export interface ParagraphStyles {
  paragraphStyle: TextStyle;
}

export type GetParagraphStyles = (
  props: ParagraphProps,
  theme: Theme,
) => Partial<ParagraphStyles>;

export const getParagraphSize = (paragraphSizes: ParagraphSizes) => (
  size: ParagraphSize,
): TextStyle => {
  // @ts-ignore
  const presetParagraphSize = paragraphSizes[size] as TextStyle;

  return presetParagraphSize || { fontSize: size };
};

export const getParagraphStyles: GetParagraphStyles = (
  { color = 'default', size = 'medium', align = 'left', weight },
  theme,
) => {
  const sizeStyle = getParagraphSize(theme.paragraphSizes)(size);

  return {
    paragraphStyle: {
      ...sizeStyle,
      color: getTextColor(theme.colors.text)(color),
      fontFamily: theme.fontFamilies.text,
      fontWeight:
        getFontWeight(theme.fontWeights)(weight) || sizeStyle.fontWeight,
      marginBottom: theme.textSizes.medium.fontSize,
      marginTop: theme.textSizes.medium.fontSize,
      textAlign: align,
    },
  };
};
