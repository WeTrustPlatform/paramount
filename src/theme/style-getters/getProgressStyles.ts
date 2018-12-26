import { ViewStyle } from 'react-native';

import {
  ProgressSize,
  ProgressVariables,
} from '../component-variables/progressVariables';

export type GetProgressStyles = (
  size: ProgressSize,
) => {
  progressStyle: ViewStyle;
  containerStyle: ViewStyle;
};

export const getProgressStyles = (
  progressVariables: ProgressVariables,
): GetProgressStyles => size => {
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
