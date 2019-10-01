import dlv from 'dlv';
import * as React from 'react';
import { Platform, View, ViewProps } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';

import { springDefaultConfig } from '../../constants/Animation';
import { ControlSize, useTheme } from '../../theme';
import { isControlSize } from '../../utils/isControlSize';
import { getOverrides, WithOverrides } from '../../utils/overrides';

const AnimatedView = animated(View);

interface ProgressBarBaseProps {
  /**
   * Percentage of the progress bar. From 0 to 1
   * @default 0
   */
  percent?: number;

  /**
   * The size of the progress bar.
   * @default "medium"
   */
  size?: ControlSize | number;
}

export interface ProgressBarOverrides {
  Root: RootProps;
  Progress: ProgressProps;
}

export interface ProgressBarProps
  extends WithOverrides<ProgressBarBaseProps, ProgressBarOverrides> {}

const defaultProps = {
  percent: 0,
  size: 'medium' as const,
};

export const ProgressBar = (props: ProgressBarProps) => {
  const {
    percent = defaultProps.percent,
    size = defaultProps.size,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.ProgressBar.Root'),
    overrides.Root,
  );
  const [Progress, progressProps] = getOverrides(
    StyledProgress,
    props,
    dlv(theme, 'overrides.ProgressBar.Progress'),
    overrides.Progress,
  );

  return (
    <Root size={size} {...rootProps}>
      <Progress percent={percent} {...progressProps} />
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
  size?: ControlSize | number;
}

const StyledRoot = (props: RootProps) => {
  const { children, style, size = defaultProps.size, ...viewProps } = props;
  const theme = useTheme();

  const height = isControlSize(size) ? theme.controlHeights[size] - 16 : size;

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background.greyDefault,
          borderRadius: 999,
          height,
          overflow: 'hidden',
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface ProgressProps extends ViewProps {
  children?: React.ReactNode;
  percent?: number;
}

const StyledProgress = (props: ProgressProps) => {
  const {
    percent = defaultProps.percent,
    children,
    style,
    ...viewProps
  } = props;
  const theme = useTheme();

  const boundPercent = Math.max(Math.min(percent, 100), 0);

  const { width } = useSpring({
    config: springDefaultConfig,
    from: { width: boundPercent },
    width: boundPercent,
  });

  return (
    <AnimatedView
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'progress' : 'none'}
      // @ts-ignore
      style={[
        {
          backgroundColor: theme.colors.background.primaryDefault,
          borderRadius: 999,
          height: '100%',
          width: width.interpolate(w => `${w}%`),
        },
        style,
      ]}
      {...viewProps}
    />
  );
};
