import dlv from 'dlv';
import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

import { useTheme } from '../../theme';
import {
  FontWeight,
  FontWeights,
  RNFontWeight,
  TextColor,
  TextColors,
  TextSize,
  TextSizes,
} from '../../theme/Theme';
import { getStyle, OverrideStyle, Style } from '../../utils/overrides';
import { TextAlign, TextTransform } from './types';

export interface TextProps extends Omit<RNTextProps, 'style'> {
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

  /**
   * Style callback or TextStyle object
   */
  style?: Style<TextProps, TextStyle>;

  /** Text content */
  children?: React.ReactNode;
}

export type TextOverride = OverrideStyle<TextProps, TextStyle>;

export const Text = (props: TextProps) => {
  const {
    children,
    color = 'default',
    size = 'medium',
    align = 'left',
    weight,
    isItalic = false,
    transform,
    style,
    ...textProps
  } = props;
  const theme = useTheme();

  const sizeStyle = getTextSize(theme.textSizes)(size);

  return (
    <RNText
      style={[
        {
          ...sizeStyle,
          color: getTextColor(theme.colors.text)(color),
          fontFamily: theme.fontFamilies.text,
          fontWeight:
            getFontWeight(theme.fontWeights)(weight) || sizeStyle.fontWeight,
          textAlign: align,
          ...(isItalic && {
            fontStyle: 'italic',
          }),
          ...(transform && {
            textTransform: transform,
          }),
        },
        getStyle(props, style),
        getStyle(props, dlv(theme, 'overrides.Text.style')),
      ]}
      {...textProps}
    >
      {children}
    </RNText>
  );
};

export const getFontWeight = (fontWeights: FontWeights) => (
  fontWeight?: FontWeight,
): RNFontWeight | undefined => {
  if (!fontWeight) return;
  // @ts-ignore
  const presetFontWeight = fontWeights[fontWeight] as RNFontWeight | undefined;

  // @ts-ignore
  return presetFontWeight || fontWeight;
};

export const getTextColor = (textColors: TextColors) => (
  textColor: TextColor,
) => {
  // @ts-ignore
  const presetColor = textColors[textColor] as string | undefined;

  return presetColor || textColor;
};

export const getTextSize = (textSizes: TextSizes) => (
  size: TextSize,
): TextStyle => {
  // @ts-ignore
  const presetTextSize = textSizes[size] as TextStyle;

  return presetTextSize || { fontSize: size };
};
