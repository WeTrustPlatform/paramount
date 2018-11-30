import * as React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import { HeadingSize, ITheme } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { TextAlign } from './types';

export interface IHeadingProps {
  size?: HeadingSize;
  theme: ITheme;
  textAlign?: TextAlign;
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  dangerouslySetInlineStyle?: TextStyle;
}

const HeadingWithoutTheme = (props: IHeadingProps & TextProps) => {
  const {
    accessibilityLevel,
    theme,
    size = 'medium',
    textAlign,
    ...textProps
  } = props;

  const { headingStyle } = theme.getHeadingStyles(size);

  return (
    <Text
      // @ts-ignore
      accessibilityRole="heading"
      aria-level={accessibilityLevel} // Web
      style={[{ textAlign }, headingStyle]}
      {...textProps}
    />
  );
};

export const Heading = withTheme(HeadingWithoutTheme);
export default Heading;
