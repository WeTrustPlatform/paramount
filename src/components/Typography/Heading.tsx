import * as React from 'react';
import { Platform, Text, TextProps } from 'react-native';

import { HeadingSize, Theme } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { GetHeadingStyles, getHeadingStyles } from './Heading.styles';
import { TextAlign } from './types';

export interface HeadingProps {
  size?: HeadingSize;
  theme: Theme;
  textAlign?: TextAlign;
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  getStyles?: GetHeadingStyles;
}

const HeadingBase = (props: HeadingProps & TextProps) => {
  const {
    accessibilityLevel,
    theme,
    size = 'medium',
    textAlign,
    getStyles = getHeadingStyles,
    ...textProps
  } = props;

  const { headingStyle } = getStyles({ size }, theme);

  return (
    <Text
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'heading' : 'none'}
      aria-level={accessibilityLevel} // Web
      style={[{ textAlign }, headingStyle]}
      {...textProps}
    />
  );
};

export const Heading = withTheme(HeadingBase);
export default Heading;
