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
import { TextAlign } from './types';

export interface TextStyleProps {
  isInline?: boolean;
  size?: TextSize;
  color?: TextColor;
  textAlign?: TextAlign;
  fontFamily?: FontFamily;
  bold?: boolean;
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
    textAlign,
    isInline = false,
    theme,
    getStyles,
    bold = false,
    ...textProps
  } = props;

  const { textStyle } = mergeStyles(getTextStyles, getStyles)(
    { size, color, fontFamily, isInline, bold },
    theme,
  );

  return (
    <RNText style={[{ textAlign }, textStyle]} {...textProps}>
      {children}
    </RNText>
  );
};

export const Text = withTheme(TextBase);
export default Text;
