import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { ProgressBarProps } from './ProgressBar';

export type GetProgressBarStyles = (
  props: ProgressBarProps,
  theme: Theme,
) => ProgressBarStyles;

export interface ProgressBarStyles {
  progressStyle: ViewStyle;
  containerStyle: ViewStyle;
}

export const getProgressBarStyles: GetProgressBarStyles = (
  { size = 'medium' },
  theme,
) => {
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
