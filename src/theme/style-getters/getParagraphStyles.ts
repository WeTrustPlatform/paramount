import { TextStyle } from 'react-native';

import { IParagraphVariables } from '../component-variables/paragraphVariables';
import { ParagraphSize } from '../ThemeInterface';

export type GetParagraphStyles = (
  size: ParagraphSize,
) => {
  paragraphStyle: TextStyle;
};

export const getParagraphStyles = (
  paragraphVariables: IParagraphVariables,
): GetParagraphStyles => size => {
  return {
    paragraphStyle: {
      ...paragraphVariables.size[size],
    },
  };
};
