import { ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

export interface ProgressVariables {
  container: ViewStyle;
  progress: ViewStyle;
  size: ProgressSizes;
}

export interface ProgressSizes {
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
}

export type ProgressSize = keyof ProgressSizes;

export const getProgressVariables = (
  themeVariables: ThemeVariables,
): ProgressVariables => {
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
