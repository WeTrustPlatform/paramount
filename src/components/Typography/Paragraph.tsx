import * as React from 'react';
import { Text, TextProps } from 'react-native';

import {
  FontFamily,
  ParagraphSize,
  TextColor,
  Theme,
} from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { GetParagraphStyles, getParagraphStyles } from './Paragraph.styles';
import { TextAlign } from './types';

// @ts-ignore: need to override for web purposes
export interface ParagraphProps extends TextProps {
  children: React.ReactNode;
  color?: TextColor;
  size?: ParagraphSize;
  theme: Theme;
  textAlign?: TextAlign;
  fontFamily?: FontFamily;

  getStyles?: GetParagraphStyles;
}

const ParagraphBase = (props: ParagraphProps) => {
  const {
    children,
    color = 'default',
    fontFamily = 'ui',
    size = 'medium',
    textAlign,
    theme,
    getStyles = getParagraphStyles,
    ...textProps
  } = props;

  const { paragraphStyle } = getParagraphStyles({ size }, theme);

  return (
    <Text
      // @ts-ignore
      accessibilityLabel="p"
      style={[{ textAlign }, paragraphStyle]}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Paragraph = withTheme(ParagraphBase);
export default Paragraph;
