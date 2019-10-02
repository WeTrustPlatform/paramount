import dlv from 'dlv';
import * as React from 'react';
import {
  Platform,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

import { useTheme } from '../../theme';
import {
  FontWeight,
  HeadingSize,
  HeadingSizes,
  TextColor,
} from '../../theme/Theme';
import { getStyle, OverrideStyle, Style } from '../../utils/overrides';
import { getFontWeight, getTextColor } from './Text';
import { TextAlign } from './types';

export interface HeadingProps extends Omit<RNTextProps, 'style'> {
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
   * Style callback or TextStyle object
   */
  style?: Style<HeadingProps, TextStyle>;

  /**
   * (Web only): Corresponding h1, h2, h3... levels
   */
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export type HeadingOverride = OverrideStyle<HeadingProps, TextStyle>;

export const Heading = (props: HeadingProps) => {
  const {
    children,
    accessibilityLevel,
    size = 'medium',
    align = 'left',
    color = 'default',
    weight,
    style,
    ...textProps
  } = props;
  const theme = useTheme();
  const sizeStyle = getHeadingSize(theme.headingSizes)(size);

  return (
    <RNText
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'heading' : 'none'}
      aria-level={accessibilityLevel} // Web
      accessibilityLevel={accessibilityLevel}
      style={[
        {
          ...sizeStyle,
          color: getTextColor(theme.colors.text)(color),
          fontFamily: theme.fontFamilies.heading,
          fontWeight:
            getFontWeight(theme.fontWeights)(weight) || sizeStyle.fontWeight,
          textAlign: align,
        },
        getStyle(props, style),
        getStyle(props, dlv(theme, 'overrides.Heading.style')),
      ]}
      {...textProps}
    >
      {children}
    </RNText>
  );
};

export const getHeadingSize = (headingSizes: HeadingSizes) => (
  size: HeadingSize,
): TextStyle => {
  // @ts-ignore
  const presetHeadingSize = headingSizes[size] as TextStyle;

  return presetHeadingSize || { fontSize: size };
};
