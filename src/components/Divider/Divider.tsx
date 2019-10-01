import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { BorderColor, BorderColors, ControlSize, useTheme } from '../../theme';
import { isControlSize } from '../../utils/isControlSize';
import { getOverrides, Override } from '../../utils/overrides';

type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends ViewProps {
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
   * Overrides
   */
  override?: DividerOverride;
}

export type DividerOverride = Override<DividerProps, StyledDividerProps>;

const defaultProps = {
  size: 'small' as const,
  color: 'default' as const,
  orientation: 'horizontal' as const,
};

export const Divider = (props: DividerProps) => {
  const {
    size = defaultProps.size,
    color = defaultProps.color,
    orientation = defaultProps.orientation,
    override,
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledDivider,
    props,
    dlv(theme, 'overrides.Divider'),
    override,
  );

  return (
    <Root size={size} color={color} orientation={orientation} {...rootProps} />
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

interface StyledDividerProps extends ViewProps {
  size?: ControlSize | number;
  color?: BorderColor | string;
  orientation?: DividerOrientation;
}

const StyledDivider = (props: StyledDividerProps) => {
  const theme = useTheme();
  const {
    size = defaultProps.size,
    color = defaultProps.color,
    orientation = defaultProps.orientation,
    style,
    ...viewProps
  } = props;

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
      style={[orientation ? styleMap[orientation] : styleMap.horizontal, style]}
      {...viewProps}
    />
  );
};
