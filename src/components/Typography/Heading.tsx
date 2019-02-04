import * as React from 'react';
import { Platform, Text, TextProps } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { HeadingSize, Theme } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetHeadingStyles,
  getHeadingStyles,
  HeadingStyles,
} from './Heading.styles';
import { TextAlign } from './types';

export interface HeadingProps {
  size?: HeadingSize;
  theme: Theme;
  textAlign?: TextAlign;
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  getStyles?: ReplaceReturnType<GetHeadingStyles, DeepPartial<HeadingStyles>>;
}

const HeadingBase = (props: HeadingProps & TextProps) => {
  const {
    accessibilityLevel,
    theme,
    size = 'medium',
    textAlign,
    getStyles,
    ...textProps
  } = props;

  const { headingStyle } = mergeStyles(getHeadingStyles, getStyles)(
    { size },
    theme,
  );

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
