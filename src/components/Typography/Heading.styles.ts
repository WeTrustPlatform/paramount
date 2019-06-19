import { TextStyle } from 'react-native';

import { HeadingSize, HeadingSizes, Theme } from '../../theme/Theme';
import { HeadingProps } from './Heading';
import { getFontWeight, getTextColor } from './Text.styles';

export interface HeadingStyles {
  headingStyle: TextStyle;
}

export type GetHeadingStyles = (
  props: HeadingProps,
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
  { size = 'medium', align = 'left', color = 'default', weight },
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
