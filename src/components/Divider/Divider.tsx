import dlv from 'dlv';
import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import { BorderColor, BorderColors, ControlSize, useTheme } from '../../theme';
import { isControlSize } from '../../utils/ControlSize';
import { getStyle, OverrideStyle, Style } from '../../utils/Overrides';

type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends Omit<ViewProps, 'style'> {
  /**
   * Size of the divider.
   * @default small
   */
  size?: ControlSize | number;

  /**
   * Color of the divider.
   * @default colors.border.default
   */
  color?: BorderColor | string;

  /**
   * Orientation of the divier
   * @default "horizontal"
   */
  orientation?: DividerOrientation;

  /**
   * Style callback or ViewStyle object
   */
  style?: Style<DividerProps, ViewStyle>;
}

export type DividerOverride = OverrideStyle<DividerProps, ViewStyle>;

export const Divider = (props: DividerProps) => {
  const {
    size = 'small',
    color = 'default',
    orientation = 'horizontal',
    style,
    ...viewProps
  } = props;
  const theme = useTheme();

  const backgroundColor = getDividerColor(theme.colors.border)(
    color || theme.colors.border.default,
  );

  const dividerSize = isControlSize(size) ? dividerScale[size] : size;

  const styleMap = {
    horizontal: {
      backgroundColor,
      height: dividerSize,
      width: '100%',
    },
    vertical: {
      backgroundColor,
      height: '100%',
      width: dividerSize,
    },
  };

  return (
    <View
      style={[
        orientation ? styleMap[orientation] : styleMap.horizontal,
        getStyle(props, style),
        getStyle(props, dlv(theme, 'overrides.Divider.style')),
      ]}
      {...viewProps}
    />
  );
};

const getDividerColor = (borderColors: BorderColors) => (
  borderColor: BorderColor,
) => {
  // @ts-ignore
  const presetColor = borderColors[borderColor] as string | undefined;

  return presetColor || borderColor;
};

const dividerScale: { [size in ControlSize]: number } = {
  large: 3,
  medium: 2,
  small: 1,
};
