import { TextStyle } from 'react-native';

import { ParagraphVariables } from '../component-variables/paragraphVariables';
import { ParagraphSize } from '../ThemeInterface';

export type GetParagraphStyles = (
  size: ParagraphSize,
) => {
  paragraphStyle: TextStyle;
};

export const getParagraphStyles = (
  paragraphVariables: ParagraphVariables,
): GetParagraphStyles => size => {
  return {
    paragraphStyle: {
      ...paragraphVariables.size[size],
    },
  };
};
