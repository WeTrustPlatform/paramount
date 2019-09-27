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
import { getOverrides, Override } from '../../utils/overrides';
import { getFontWeight, getTextColor } from './Text';
import { TextAlign } from './types';

export interface HeadingProps extends RNTextProps {
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
   * Overrides
   */
  override?: Override<HeadingProps, StyledHeadingProps>;

  /**
   * (Web only): Corresponding h1, h2, h3... levels
   */
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = (props: HeadingProps) => {
  const {
    accessibilityLevel,
    size,
    align,
    color,
    weight,
    override,
    ...textProps
  } = props;

  const [Text, textRProps] = getOverrides(StyledHeading, props, override);

  return (
    <Text
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'heading' : 'none'}
      aria-level={accessibilityLevel} // Web
      accessibilityLevel={accessibilityLevel}
      size={size}
      align={align}
      color={color}
      weight={weight}
      {...textProps}
      {...textRProps}
    />
  );
};

export const getHeadingSize = (headingSizes: HeadingSizes) => (
  size: HeadingSize,
): TextStyle => {
  // @ts-ignore
  const presetHeadingSize = headingSizes[size] as TextStyle;

  return presetHeadingSize || { fontSize: size };
};

interface StyledHeadingProps extends RNTextProps {
  children?: React.ReactNode;
  size?: HeadingSize;
  align?: TextAlign;
  color?: TextColor;
  weight?: FontWeight;
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

const StyledHeading = (props: StyledHeadingProps) => {
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
      style={[
        {
          ...sizeStyle,
          color: getTextColor(theme.colors.text)(color),
          fontFamily: theme.fontFamilies.heading,
          fontWeight:
            getFontWeight(theme.fontWeights)(weight) || sizeStyle.fontWeight,
          textAlign: align,
        },
        style,
      ]}
      {...textProps}
    >
      {children}
    </RNText>
  );
};
