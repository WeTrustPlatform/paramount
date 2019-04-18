import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import {
  FontFamily,
  FontWeight,
  TextColor,
  TextSize,
} from '../../theme/ThemeInterface';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { GetTextStyles, getTextStyles, TextStyles } from './Text.styles';
import { TextAlign, TextTransform } from './types';

export interface TextStyleProps {
  isInline?: boolean;
  size?: TextSize;
  color?: TextColor;
  align?: TextAlign;
  transform?: TextTransform;
  fontFamily?: FontFamily;
  weight?: FontWeight;
  isBold?: boolean;
  isItalic?: boolean;
}

// @ts-ignore: need to override for web purposes
export interface TextProps extends RNTextProps, TextStyleProps {
  children: React.ReactNode;

  getStyles?: ReplaceReturnType<GetTextStyles, DeepPartial<TextStyles>>;
}

export const Text = (props: TextProps) => {
  const {
    children,
    color = 'default',
    fontFamily = 'text',
    size = 'medium',
    align = 'left',
    weight = 'normal',
    isInline = false,
    getStyles,
    isBold = false,
    isItalic = false,
    transform,
    ...textProps
  } = props;
  const theme = useTheme();

  const { textStyle } = mergeStyles(getTextStyles, getStyles)(
    {
      align,
      color,
      fontFamily,
      isBold,
      isInline,
      isItalic,
      size,
      transform,
      weight,
    },
    theme,
  );

  return (
    <RNText style={textStyle} {...textProps}>
      {children}
    </RNText>
  );
};
