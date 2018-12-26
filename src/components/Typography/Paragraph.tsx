import * as React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import {
  FontFamily,
  ParagraphSize,
  TextColor,
  Theme,
} from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { TextAlign } from './types';

// @ts-ignore: need to override for web purposes
export interface ParagraphProps extends TextProps {
  children: React.ReactNode;
  color?: TextColor;
  size?: ParagraphSize;
  theme: Theme;
  textAlign?: TextAlign;
  fontFamily?: FontFamily;

  dangerouslySetInlineStyle?: {
    __style: TextStyle;
  };
}

const ParagraphBase = (props: ParagraphProps) => {
  const {
    children,
    color = 'default',
    fontFamily = 'ui',
    size = 'medium',
    textAlign,
    theme,
    dangerouslySetInlineStyle,
    ...textProps
  } = props;

  const { paragraphStyle } = theme.getParagraphStyles(size);

  return (
    <Text
      // @ts-ignore
      accessibilityLabel="p"
      style={[
        { textAlign },
        paragraphStyle,
        dangerouslySetInlineStyle && dangerouslySetInlineStyle.__style,
      ]}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Paragraph = withTheme(ParagraphBase);
export default Paragraph;
