import { TextStyle } from 'react-native';

import {
  FontFamilies,
  FontFamily,
  PresetTextColors,
  TextColor,
  Theme,
} from '../../theme/ThemeInterface';
import { getFontFamily, getTextColor, getTextVariables } from './Text.styles';
import { TextAlign } from './types';

export interface ParagraphSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type ParagraphSize = keyof ParagraphSizes;

export interface ParagraphVariables {
  color: PresetTextColors;
  size: ParagraphSizes;
  fontFamily: FontFamilies;
}

export const getParagraphVariables = (theme: Theme): ParagraphVariables => {
  const textVariables = getTextVariables(theme);

  return {
    color: theme.colors.text,
    fontFamily: theme.fontFamilies,
    size: {
      small: {
        ...textVariables.size.small,
        fontSize: theme.paragraphSizes.small,
        lineHeight: 24,
        marginBottom: '1em',
        marginTop: '1em',
      },

      medium: {
        ...textVariables.size.medium,
        fontSize: theme.paragraphSizes.medium,
        lineHeight: 21,
        marginBottom: '1em',
        marginTop: '1em',
      },

      large: {
        ...textVariables.size.large,
        fontSize: theme.paragraphSizes.large,
        lineHeight: 18,
        marginBottom: '1em',
        marginTop: '1em',
      },
    },
  };
};

export interface ParagraphStylesProps {
  align: TextAlign;
  size: ParagraphSize;
  color: TextColor;
  fontFamily: FontFamily;
}

export interface ParagraphStyles {
  paragraphStyle: TextStyle;
}

export type GetParagraphStyles = (
  paragraphStylesProps: ParagraphStylesProps,
  theme: Theme,
) => ParagraphStyles;

export const getParagraphStyles: GetParagraphStyles = (
  { size, color, fontFamily, align },
  theme,
) => {
  const paragraphVariables = getParagraphVariables(theme);

  return {
    paragraphStyle: {
      ...paragraphVariables.size[size],
      color: getTextColor(theme.colors.text)(color),
      fontFamily: getFontFamily(paragraphVariables.fontFamily)(fontFamily),
      textAlign: align,
    },
  };
};
