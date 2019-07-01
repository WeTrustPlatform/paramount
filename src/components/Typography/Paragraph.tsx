import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { FontWeight, TextColor, TextSize } from '../../theme/Theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetParagraphStyles,
  getParagraphStyles,
  ParagraphStyles,
} from './Paragraph.styles';
import { TextAlign } from './types';

// @ts-ignore: need to override for web purposes
export interface ParagraphProps extends TextProps {
  /**
   * Size of the paragraph.
   * @default "medium"
   */
  size?: TextSize;

  /**
   * Color of the paragraph.
   * @default "default"
   */
  color?: TextColor;

  /**
   * Alignment of the paragraph.
   * @default "left"
   */
  align?: TextAlign;

  /**
   * Weight of the paragraph.
   * @default paragraphSize.fontWeight
   */
  weight?: FontWeight;

  /** Text content */
  children?: React.ReactNode;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<
    GetParagraphStyles,
    DeepPartial<ParagraphStyles>
  >;
}

export const Paragraph = (props: ParagraphProps) => {
  const {
    children,
    color = 'default',
    size = 'medium',
    align = 'left',
    weight,
    getStyles,
    ...textProps
  } = props;
  const theme = useTheme();

  const { paragraphStyle } = mergeStyles(
    getParagraphStyles,
    getStyles,
    theme.components.getParagraphStyles,
  )(props, theme);

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
