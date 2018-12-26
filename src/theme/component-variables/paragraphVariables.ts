import { TextStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';
import { getTextVariables } from './textVariables';

export interface ParagraphSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type ParagraphSize = keyof ParagraphSizes;

export interface ParagraphVariables {
  size: ParagraphSizes;
}

export const getParagraphVariables = (
  themeVariables: ThemeVariables,
): ParagraphVariables => {
  const textVariables = getTextVariables(themeVariables);

  return {
    size: {
      small: {
        ...textVariables.size.small,
        fontSize: themeVariables.paragraphSizes.small,
        lineHeight: 24,
        marginBottom: '1em',
        marginTop: '1em',
      },

      medium: {
        ...textVariables.size.medium,
        fontSize: themeVariables.paragraphSizes.medium,
        lineHeight: 21,
        marginBottom: '1em',
        marginTop: '1em',
      },

      large: {
        ...textVariables.size.large,
        fontSize: themeVariables.paragraphSizes.large,
        lineHeight: 18,
        marginBottom: '1em',
        marginTop: '1em',
      },
    },
  };
};
