import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import { useTheme } from '../../theme';
import { FontWeight, TextColor, TextSize } from '../../theme/Theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { GetTextStyles, getTextStyles } from './Text.styles';
import { TextAlign, TextTransform } from './types';

export interface TextProps extends RNTextProps {
  /**
   * Size of the text.
   * @default "medium"
   */
  size?: TextSize;

  /**
   * Color of the text.
   * @default "default"
   */
  color?: TextColor;

  /**
   * Alignment of the text.
   * @default "left"
   */
  align?: TextAlign;

  /**
   * Text transformations.
   */
  transform?: TextTransform;

  /**
   * Weight of the text.
   * @default textSize.fontWeight
   */
  weight?: FontWeight;

  /**
   * When true, displays the text in italics.
   * @default false
   */
  isItalic?: boolean;

  /** Text content */
  children?: React.ReactNode;

  /** Callback to get element styles. */
  getStyles?: GetTextStyles;
}

export const Text = (props: TextProps) => {
  const {
    children,
    color = 'default',
    size = 'medium',
    align = 'left',
    weight,
    getStyles,
    isItalic = false,
    transform,
    ...textProps
  } = props;
  const theme = useTheme();

  const { textStyle } = mergeStyles(
    getTextStyles,
    getStyles,
    theme.components.getTextStyles,
  )(props, theme);

  return (
    <RNText style={textStyle} {...textProps}>
      {children}
    </RNText>
  );
};
