import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

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

export const getProgressVariables = (theme: Theme): ProgressVariables => {
  return {
    container: {
      backgroundColor: theme.colors.background.tint2,
    },
    progress: {
      backgroundColor: theme.colors.background.primary.default,
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

export interface ProgressStylesProps {
  size: ProgressSize;
}
export type GetProgressStyles = (
  progressStylesProps: ProgressStylesProps,
  theme: Theme,
) => ProgressStyles;

export interface ProgressStyles {
  progressStyle: ViewStyle;
  containerStyle: ViewStyle;
}

export const getProgressStyles: GetProgressStyles = ({ size }, theme) => {
  const progressVariables = getProgressVariables(theme);
  const sizeStyle = progressVariables.size[size];

  return {
    containerStyle: {
      ...sizeStyle,
      ...progressVariables.container,
    },
    progressStyle: {
      ...sizeStyle,
      ...progressVariables.progress,
    },
  };
};
