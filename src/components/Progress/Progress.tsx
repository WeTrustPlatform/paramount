import * as React from 'react';
import { Platform, View, ViewProps } from 'react-native';
import { Spring } from 'react-spring';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetProgressStyles,
  getProgressStyles,
  ProgressSize,
  ProgressStyles,
} from './Progress.styles';

export interface ProgressProps extends ViewProps {
  theme: Theme;
  percent?: number;
  size?: ProgressSize;
  getStyles?: ReplaceReturnType<GetProgressStyles, DeepPartial<ProgressStyles>>;
}

const ProgressBase = (props: ProgressProps) => {
  const {
    percent = 0,
    size = 'medium',
    getStyles,
    theme,
    ...viewProps
  } = props;
  const { containerStyle, progressStyle } = mergeStyles(
    getProgressStyles,
    getStyles,
  )({ size }, theme);

  return (
    <Spring to={{ value: percent }}>
      {({ value }) => {
        return (
          <View style={containerStyle} {...viewProps}>
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
