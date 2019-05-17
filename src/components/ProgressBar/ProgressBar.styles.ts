import { ViewStyle } from 'react-native';

import { ControlSize, Theme } from '../../theme/ThemeInterface';

export interface ProgressBarVariables {
  container: ViewStyle;
  progress: ViewStyle;
}

export interface ProgressBarStylesProps {
  size: ControlSize;
}

export type GetProgressBarStyles = (
  progressStylesProps: ProgressBarStylesProps,
  theme: Theme,
) => ProgressBarStyles;

export interface ProgressBarStyles {
  progressStyle: ViewStyle;
  containerStyle: ViewStyle;
}

export const getProgressBarStyles: GetProgressBarStyles = ({ size }, theme) => {
  const height = theme.controlHeights[size] - 16;

  return {
    containerStyle: {
      backgroundColor: theme.colors.background.greyDefault,
      borderRadius: 999,
      height,
      overflow: 'hidden',
    },
    progressStyle: {
      backgroundColor: theme.colors.background.primaryDefault,
      borderRadius: 999,
      height: '100%',
    },
  };
};
