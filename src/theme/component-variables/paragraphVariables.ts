import { TextStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';
import { getTextVariables } from './textVariables';

export interface IParagraphSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type ParagraphSize = keyof IParagraphSizes;

export interface IParagraphVariables {
  size: IParagraphSizes;
}

export const getParagraphVariables = (
  themeVariables: IThemeVariables,
): IParagraphVariables => {
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
