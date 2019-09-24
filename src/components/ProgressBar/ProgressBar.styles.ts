import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
import { ProgressBarProps } from './ProgressBar';

export type GetProgressBarStyles = (
  props: ProgressBarProps,
  theme: Theme,
) => Partial<ProgressBarStyles>;

export interface ProgressBarStyles {
  progressStyle: ViewStyle;
  containerStyle: ViewStyle;
}

export const getProgressBarStyles: GetProgressBarStyles = (
  { size = 'medium' },
  theme,
) => {
  const height = isControlSize(size) ? theme.controlHeights[size] - 16 : size;

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
