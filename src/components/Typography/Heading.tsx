import * as React from 'react';
import { Platform, Text, TextProps } from 'react-native';

import { useTheme } from '../../theme';
import { FontWeight, HeadingSize, TextColor } from '../../theme/Theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { GetHeadingStyles, getHeadingStyles } from './Heading.styles';
import { TextAlign } from './types';

export interface HeadingProps extends TextProps {
  /** Text content */
  children?: React.ReactNode;

  /**
   * Size of the heading.
   * @default "medium"
   */
  size?: HeadingSize;

  /**
   * Alignment of the heading.
   * @default "left"
   */
  align?: TextAlign;

  /**
   * Color of the heading.
   * @default "default"
   */
  color?: TextColor;

  /**
   * Weight of the heading.
   * @default headingSize.fontWeight
   */
  weight?: FontWeight;

  /**
   * (Web only): Corresponding h1, h2, h3... levels
   */
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  /** Callback to get element styles. */
  getStyles?: GetHeadingStyles;
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

  const { headingStyle } = mergeStyles(
    getHeadingStyles,
    getStyles,
    theme.components.getHeadingStyles,
  )(props, theme);

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
