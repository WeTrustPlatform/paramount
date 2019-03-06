import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import {
  FontFamily,
  TextColor,
  TextSize,
  Theme,
} from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
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
  isBold?: boolean;
  isItalic?: boolean;
}

// @ts-ignore: need to override for web purposes
export interface TextProps extends RNTextProps, TextStyleProps {
  children: React.ReactNode;
  theme: Theme;
  href?: string;

  getStyles?: ReplaceReturnType<GetTextStyles, DeepPartial<TextStyles>>;
}

const TextBase = (props: TextProps) => {
  const {
    children,
    color = 'default',
    fontFamily = 'text',
    size = 'medium',
    align = 'left',
    isInline = false,
    theme,
    getStyles,
    isBold = false,
    isItalic = false,
    transform,
    ...textProps
  } = props;

  const { textStyle } = mergeStyles(getTextStyles, getStyles)(
    { size, color, fontFamily, isInline, isBold, isItalic, align, transform },
    theme,
  );

  return (
    <RNText style={textStyle} {...textProps}>
      {children}
    </RNText>
  );
};

export const Text = withTheme(TextBase);
export default Text;
