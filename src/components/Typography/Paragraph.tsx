import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import {
  FontFamily,
  FontWeight,
  ParagraphSize,
  TextColor,
  Theme,
} from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetParagraphStyles,
  getParagraphStyles,
  ParagraphStyles,
} from './Paragraph.styles';
import { TextAlign } from './types';

// @ts-ignore: need to override for web purposes
export interface ParagraphProps extends TextProps {
  children: React.ReactNode;
  color?: TextColor;
  size?: ParagraphSize;
  weight?: FontWeight;
  theme: Theme;
  align?: TextAlign;
  fontFamily?: FontFamily;

  getStyles?: ReplaceReturnType<
    GetParagraphStyles,
    DeepPartial<ParagraphStyles>
  >;
}

const ParagraphBase = (props: ParagraphProps) => {
  const {
    children,
    color = 'default',
    fontFamily = 'text',
    size = 'medium',
    align = 'left',
    weight = 'normal',
    theme,
    getStyles,
    ...textProps
  } = props;

  const { paragraphStyle } = mergeStyles(getParagraphStyles, getStyles)(
    { align, size, color, fontFamily, weight },
    theme,
  );

  return (
    <Text
      // @ts-ignore
      accessibilityLabel="p"
      style={paragraphStyle}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Paragraph = withTheme(ParagraphBase);
export default Paragraph;
