import { TextStyle } from 'react-native';

import {
  FontWeight,
  HeadingSize,
  HeadingSizes,
  TextColor,
  Theme,
} from '../../theme/ThemeInterface';
import { getFontWeight, getTextColor } from './Text.styles';
import { TextAlign } from './types';

export interface HeadingVariables {
  size: HeadingSizes;
}

export interface HeadingStyles {
  headingStyle: TextStyle;
}

export interface HeadingStylesProps {
  size: HeadingSize;
  align: TextAlign;
  color: TextColor;
  weight?: FontWeight;
}

export type GetHeadingStyles = (
  headingStylesProps: HeadingStylesProps,
  theme: Theme,
) => HeadingStyles;

export const getHeadingSize = (headingSizes: HeadingSizes) => (
  size: HeadingSize,
): TextStyle => {
  // @ts-ignore
  const presetHeadingSize = headingSizes[size] as TextStyle;

  return presetHeadingSize || { fontSize: size };
};

export const getHeadingStyles: GetHeadingStyles = (
  { size, align, color, weight },
  theme,
) => {
  const sizeStyle = getHeadingSize(theme.headingSizes)(size);

  return {
    headingStyle: {
      ...sizeStyle,
      color: getTextColor(theme.colors.text)(color),
      fontFamily: theme.fontFamilies.heading,
      fontWeight:
        getFontWeight(theme.fontWeights)(weight) || sizeStyle.fontWeight,
      textAlign: align,
    },
  };
};
