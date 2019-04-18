import * as React from 'react';
import { Platform, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetProgressStyles,
  getProgressStyles,
  ProgressSize,
  ProgressStyles,
} from './Progress.styles';

export interface ProgressProps {
  percent?: number;
  size?: ProgressSize;
  getStyles?: ReplaceReturnType<GetProgressStyles, DeepPartial<ProgressStyles>>;
  testID?: string;
}

export const Progress = (props: ProgressProps) => {
  const { percent = 0, size = 'medium', getStyles, testID } = props;
  const theme = useTheme();

  const { containerStyle, progressStyle } = mergeStyles(
    getProgressStyles,
    getStyles,
  )({ size }, theme);

  return (
    <View style={containerStyle} testID={testID}>
      <View
        // @ts-ignore
        accessibilityRole={Platform.OS === 'web' ? 'progress' : 'none'}
        style={{
          width: `${percent}%`,
          ...progressStyle,
        }}
      />
    </View>
  );
};
