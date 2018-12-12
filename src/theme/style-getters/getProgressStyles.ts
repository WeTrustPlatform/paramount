import { ViewStyle } from 'react-native';

import {
  IProgressVariables,
  ProgressSize,
} from '../component-variables/progressVariables';

export type GetProgressStyles = (
  size: ProgressSize,
) => {
  progressStyle: ViewStyle;
  containerStyle: ViewStyle;
};

export const getProgressStyles = (
  progressVariables: IProgressVariables,
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
