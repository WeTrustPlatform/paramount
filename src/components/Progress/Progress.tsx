import * as React from 'react';
import { Platform, View } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetProgressStyles,
  getProgressStyles,
  ProgressSize,
  ProgressStyles,
} from './Progress.styles';

const AnimatedView = animated(View);

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

  const boundPercent = Math.max(Math.min(percent, 100), 0);
  const { width } = useSpring({
    from: { width: boundPercent },
    width: boundPercent,
  });

  return (
    <View style={containerStyle} testID={testID}>
      <AnimatedView
        // @ts-ignore
        accessibilityRole={Platform.OS === 'web' ? 'progress' : 'none'}
        // @ts-ignore
        style={{
          ...progressStyle,
          width: width.interpolate(w => `${w}%`),
        }}
      />
    </View>
  );
};
