import * as React from 'react';
import { Platform, View } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';
import { DeepPartial } from 'ts-essentials';

import { springDefaultConfig } from '../../constants/Animation';
import { ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetProgressBarStyles,
  getProgressBarStyles,
  ProgressBarStyles,
} from './ProgressBar.styles';

const AnimatedView = animated(View);

export interface ProgressBarProps {
  percent?: number;
  size?: ControlSize;
  getStyles?: ReplaceReturnType<
    GetProgressBarStyles,
    DeepPartial<ProgressBarStyles>
  >;
  testID?: string;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { percent = 0, size = 'medium', getStyles, testID } = props;
  const theme = useTheme();

  const { containerStyle, progressStyle } = mergeStyles(
    getProgressBarStyles,
    getStyles,
  )({ size }, theme);

  const boundPercent = Math.max(Math.min(percent, 100), 0);
  const { width } = useSpring({
    config: springDefaultConfig,
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
