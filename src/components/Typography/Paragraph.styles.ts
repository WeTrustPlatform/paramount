import { TextStyle } from 'react-native';

import {
  FontFamilies,
  FontFamily,
  TextColor,
  TextColors,
  Theme,
} from '../../theme/ThemeInterface';
import { getFontFamily, getTextColor, getTextVariables } from './Text.styles';

export interface ParagraphSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type ParagraphSize = keyof ParagraphSizes;

export interface ParagraphVariables {
  color: TextColors;
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
  { size, color, fontFamily },
  theme,
) => {
  const paragraphVariables = getParagraphVariables(theme);

  return {
    paragraphStyle: {
      ...paragraphVariables.size[size],
      color: getTextColor(paragraphVariables.color)(color),
      fontFamily: getFontFamily(paragraphVariables.fontFamily)(fontFamily),
    },
  };
};
