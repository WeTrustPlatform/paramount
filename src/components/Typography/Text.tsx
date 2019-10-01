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
import { getOverrides, Override } from '../../utils/overrides';
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

  /**
   * Overrides
   */
  override?: TextOverride;

  /** Text content */
  children?: React.ReactNode;
}

export type TextOverride = Override<TextProps, StyledTextProps>;

export const Text = (props: TextProps) => {
  const {
    children,
    color,
    size,
    align,
    weight,
    isItalic,
    transform,
    override,
    ...textProps
  } = props;

  const [TextR, textRProps] = getOverrides(StyledText, props, override);

  return (
    <TextR
      color={color}
      size={size}
      align={align}
      weight={weight}
      isItalic={isItalic}
      transform={transform}
      {...textProps}
      {...textRProps}
    >
      {children}
    </TextR>
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

interface StyledTextProps extends RNTextProps {
  children?: React.ReactNode;
  size?: TextSize;
  color?: TextColor;
  align?: TextAlign;
  transform?: TextTransform;
  weight?: FontWeight;
  isItalic?: boolean;
}

const StyledText = (props: StyledTextProps) => {
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
        style,
      ]}
      {...textProps}
    >
      {children}
    </RNText>
  );
};
