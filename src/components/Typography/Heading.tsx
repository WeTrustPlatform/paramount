import * as React from 'react';
import { Platform, Text, TextProps } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { FontWeight, HeadingSize, TextColor } from '../../theme/Theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetHeadingStyles,
  getHeadingStyles,
  HeadingStyles,
} from './Heading.styles';
import { TextAlign } from './types';

export interface HeadingProps extends TextProps {
  children: React.ReactNode;
  size?: HeadingSize;
  align?: TextAlign;
  color?: TextColor;
  weight?: FontWeight;
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  getStyles?: ReplaceReturnType<GetHeadingStyles, DeepPartial<HeadingStyles>>;
}

export const Heading = (props: HeadingProps) => {
  const {
    accessibilityLevel,
    size = 'medium',
    align = 'left',
    color = 'default',
    weight,
    getStyles,
    ...textProps
  } = props;
  const theme = useTheme();

  const { headingStyle } = mergeStyles(getHeadingStyles, getStyles)(
    { size, align, color, weight },
    theme,
  );

  return (
    <Text
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'heading' : 'none'}
      aria-level={accessibilityLevel} // Web
      style={headingStyle}
      {...textProps}
    />
  );
};
