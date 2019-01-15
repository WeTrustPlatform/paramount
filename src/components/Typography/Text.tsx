import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import {
  FontFamily,
  TextColor,
  TextSize,
  Theme,
} from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { GetTextStyles, getTextStyles } from './Text.styles';
import { TextAlign } from './types';

export interface TextStyleProps {
  isInline?: boolean;
  size?: TextSize;
  color?: TextColor;
  textAlign?: TextAlign;
  fontFamily?: FontFamily;
}

// @ts-ignore: need to override for web purposes
export interface TextProps extends RNTextProps, TextStyleProps {
  children: React.ReactNode;
  theme: Theme;
  href?: string;

  getStyles?: GetTextStyles;
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
    getStyles = getTextStyles,
    ...textProps
  } = props;

  const { textStyle } = getStyles({ size, color, fontFamily, isInline }, theme);

  return (
    <RNText style={[{ textAlign }, textStyle]} {...textProps}>
      {children}
    </RNText>
  );
};

export const Text = withTheme(TextBase);
export default Text;
