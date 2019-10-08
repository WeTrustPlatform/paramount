import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import { SpacingSize, Theme, useTheme } from '../../theme';
import { getStyle, OverrideStyle, Style } from '../../utils/Overrides';

type SpacingOrientation = 'horizontal' | 'vertical';

export interface SpacingProps extends Omit<ViewProps, 'style'> {
  /**
   * Size of the Spacing.
   * @default "medium"
   */
  size?: SpacingSize | number;

  /**
   * Orientation of spacing.
   * @default "vertical"
   */
  orientation?: SpacingOrientation;

  /**
   * Style callback or ViewStyle object
   */
  style?: Style<SpacingProps, ViewStyle>;
}

export type SpacingOverride = OverrideStyle<SpacingProps, ViewStyle>;

export const getSpacing = (size: SpacingSize | number, theme: Theme) =>
  typeof size === 'number' ? size : theme.spacing[size];

export const Spacing = (props: SpacingProps) => {
  const {
    size = 'medium',
    orientation = 'vertical',
    style,
    ...viewProps
  } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        orientation === 'vertical'
          ? { height: getSpacing(size, theme) }
          : { width: getSpacing(size, theme) },
        getStyle(props, style),
        getStyle(props, dlv(theme, 'overrides.Spacing.style')),
      ]}
      {...viewProps}
    />
  );
};
