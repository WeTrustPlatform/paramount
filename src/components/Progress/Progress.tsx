import * as React from 'react';
import { Platform, View, ViewStyle } from 'react-native';
import { Spring } from 'react-spring';

import { Theme, withTheme } from '../../theme';
import { ProgressSize } from '../../theme/component-variables/progressVariables';

export interface ProgressProps {
  theme: Theme;
  percent?: number;
  size?: ProgressSize;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: {
    containerStyle: ViewStyle;
    progressStyle: ViewStyle;
  };
}

const ProgressBase = (props: ProgressProps) => {
  const {
    percent = 0,
    size = 'medium',
    dangerouslySetInlineStyle,
    theme,
  } = props;
  const { containerStyle, progressStyle } = theme.getProgressStyles(size);

  return (
    <Spring to={{ value: percent }}>
      {({ value }) => {
        return (
          <View
            style={{
              ...containerStyle,
              ...(dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.containerStyle),
            }}
          >
            <View
              // @ts-ignore
              accessibilityRole={Platform.OS === 'web' ? 'progress' : 'none'}
              style={{
                width: `${value}%`,
                ...progressStyle,
                ...(dangerouslySetInlineStyle &&
                  dangerouslySetInlineStyle.progressStyle),
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
