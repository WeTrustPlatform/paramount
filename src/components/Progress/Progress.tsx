import * as React from 'react';
import { Platform, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetProgressStyles,
  getProgressStyles,
  ProgressSize,
  ProgressStyles,
} from './Progress.styles';

export interface ProgressProps {
  theme: Theme;
  percent?: number;
  size?: ProgressSize;
  getStyles?: ReplaceReturnType<GetProgressStyles, DeepPartial<ProgressStyles>>;
  testID?: string;
}

const ProgressBase = (props: ProgressProps) => {
  const { percent = 0, size = 'medium', getStyles, theme, testID } = props;
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

export const Progress = withTheme(ProgressBase);
export default Progress;
