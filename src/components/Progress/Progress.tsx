import * as React from 'react';
import { Platform, View } from 'react-native';
import { Spring } from 'react-spring';

import { Theme, withTheme } from '../../theme';
import {
  GetProgressStyles,
  getProgressStyles,
  ProgressSize,
} from './Progress.styles';

export interface ProgressProps {
  theme: Theme;
  percent?: number;
  size?: ProgressSize;
  getStyles?: GetProgressStyles;
}

const ProgressBase = (props: ProgressProps) => {
  const {
    percent = 0,
    size = 'medium',
    getStyles = getProgressStyles,
    theme,
  } = props;
  const { containerStyle, progressStyle } = getStyles({ size }, theme);

  return (
    <Spring to={{ value: percent }}>
      {({ value }) => {
        return (
          <View style={containerStyle}>
            <View
              // @ts-ignore
              accessibilityRole={Platform.OS === 'web' ? 'progress' : 'none'}
              style={{
                width: `${value}%`,
                ...progressStyle,
              }}
            />
          </View>
        );
      }}
    </Spring>
  );
};

export const Progress = withTheme(ProgressBase);
export default Progress;
