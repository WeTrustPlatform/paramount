import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export interface IProgressVariables {
  container: ViewStyle;
  progress: ViewStyle;
  size: IProgressSizes;
}

export interface IProgressSizes {
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
}

export type ProgressSize = keyof IProgressSizes;

export const getProgressVariables = (
  themeVariables: IThemeVariables,
): IProgressVariables => {
  return {
    container: {
      backgroundColor: themeVariables.colors.background.tint2,
    },
    progress: {
      backgroundColor: themeVariables.colors.background.primary.default,
      height: '100%',
    },
    size: {
      small: {
        borderRadius: 999,
        height: 16,
      },

      medium: {
        borderRadius: 999,
        height: 24,
      },

      large: {
        borderRadius: 999,
        height: 32,
      },
    },
  };
};
