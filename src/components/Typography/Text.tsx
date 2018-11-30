import * as React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

import {
  FontFamily,
  ITheme,
  TextColor,
  TextSize,
} from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { TextAlign } from './types';

export interface ITextStyleProps {
  isInline?: boolean;
  size?: TextSize;
  color?: TextColor;
  textAlign?: TextAlign;
  fontFamily?: FontFamily;
}

// @ts-ignore: need to override for web purposes
export interface ITextProps extends TextProps, ITextStyleProps {
  children: React.ReactNode;
  theme: ITheme;
  href?: string;

  // Web-only
  accessibilityRole?:
    | 'label'
    | 'link'
    | 'heading'
    | 'li'
    | 'code'
    | 'blockquote';

  dangerouslySetInlineStyle?: {
    __style: TextStyle;
  };
}

const TextWithoutTheme = (props: ITextProps) => {
  const {
    accessibilityRole,
    children,
    color = 'default',
    fontFamily = 'text',
    size = 'medium',
    textAlign,
    isInline,
    theme,
    dangerouslySetInlineStyle,
    ...textProps
  } = props;

  const { textStyle } = theme.getTextStyles(size, color, fontFamily, isInline);

  return (
    <RNText
      // @ts-ignore
      accessibilityRole={accessibilityRole}
      style={[
        { textAlign },
        textStyle,
        dangerouslySetInlineStyle && dangerouslySetInlineStyle.__style,
      ]}
      {...textProps}
    >
      {children}
    </RNText>
  );
};

export const Text = withTheme(TextWithoutTheme);
export default Text;
