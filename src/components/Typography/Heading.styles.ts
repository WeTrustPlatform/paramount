import { TextStyle } from 'react-native';

import {
  HeadingSize,
  HeadingSizes,
  TextColor,
  Theme,
} from '../../theme/ThemeInterface';
import { getTextColor } from './Text.styles';
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
  { size, align, color },
  theme,
) => {
  return {
    headingStyle: {
      ...getHeadingSize(theme.headingSizes)(size),
      color: getTextColor(theme.colors.text)(color),
      fontFamily: theme.fontFamilies.heading,
      fontWeight: '600',
      textAlign: align,
    },
  };
};
