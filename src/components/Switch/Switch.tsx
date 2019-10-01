import dlv from 'dlv';
import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';

import { springDefaultConfig } from '../../constants/Animation';
import { ControlSize, Theme, useTheme } from '../../theme';
import { isControlSize } from '../../utils/isControlSize';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Icon } from '../Icon';

const AnimatedView = animated(View);

interface SwitchBaseProps {
  /**
   * The size of the switch.
   */
  size?: ControlSize | number;

  /**
   * When true, will display as switched on.
   * @default false
   */
  value?: boolean;

  /**
   * When true, the switch is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Called when checkbox is pressed.
   */
  onValueChange?: (value: boolean) => void;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export interface SwitchOverrides {
  Touchable: TouchableProps;
  Background: BackgroundProps;
  Circle: CircleProps;
}

export interface SwitchProps
  extends WithOverrides<SwitchBaseProps, SwitchOverrides> {}

const defaultProps = {
  size: 'medium' as const,
  value: false,
  isDisabled: false,
  onValueChange: () => {
    return;
  },
};

export const Switch = (props: SwitchProps) => {
  const {
    size = defaultProps.size,
    value = defaultProps.value,
    isDisabled = defaultProps.isDisabled,
    onValueChange = defaultProps.onValueChange,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Touchable, touchableProps] = getOverrides(
    StyledTouchable,
    props,
    dlv(theme, 'overrides.Switch.Touchable'),
    overrides.Touchable,
  );
  const [Background, backgroundProps] = getOverrides(
    StyledBackground,
    props,
    dlv(theme, 'overrides.Switch.Background'),
    overrides.Background,
  );
  const [Circle, circleProps] = getOverrides(
    StyledCircle,
    props,
    dlv(theme, 'overrides.Switch.Circle'),
    overrides.Circle,
  );

  return (
    <Touchable
      isDisabled={isDisabled}
      size={size}
      onPress={() => onValueChange(!value)}
      {...touchableProps}
    >
      <Background
        isDisabled={isDisabled}
        size={size}
        value={value}
        {...backgroundProps}
      >
        <Circle
          isDisabled={isDisabled}
          size={size}
          value={value}
          {...circleProps}
        />
      </Background>
    </Touchable>
  );
};

interface TouchableProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  size?: ControlSize | number;
  isDisabled?: boolean;
}

const StyledTouchable = (props: TouchableProps) => {
  const { size, isDisabled, children, style, ...touchableProps } = props;

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      style={[
        {
          alignSelf: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        style,
      ]}
      {...touchableProps}
    >
      {children}
    </TouchableOpacity>
  );
};

interface BackgroundProps extends ViewProps {
  children?: React.ReactNode;
  size?: ControlSize | number;
  isDisabled?: boolean;
  value?: boolean;
}

const getCircleSize = (size: ControlSize | number, theme: Theme) => {
  return isControlSize(size) ? theme.controlHeights[size] - 8 : size;
};

const getContainerSize = (size: ControlSize | number, theme: Theme) => {
  return getCircleSize(size, theme) * 2;
};

const StyledBackground = (props: BackgroundProps) => {
  const {
    size = defaultProps.size,
    isDisabled = defaultProps.isDisabled,
    children,
    value,
    style,
    ...viewProps
  } = props;
  const theme = useTheme();
  const { backgroundColor } = useSpring({
    config: springDefaultConfig,

    backgroundColor: value
      ? isDisabled
        ? theme.colors.background.greyDefault
        : theme.colors.background.primaryDefault
      : theme.colors.background.greyDefault,
  });

  const circleSize = getCircleSize(size, theme);
  const containerSize = getContainerSize(size, theme);

  return (
    <AnimatedView
      // @ts-ignore
      style={[
        {
          alignItems: 'center',
          backgroundColor: theme.colors.background.greyLight,
          borderRadius: 24,
          flexDirection: 'row',
          height: circleSize + 8,
          padding: 3,
          width: containerSize,
        },
        { backgroundColor },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </AnimatedView>
  );
};

interface CircleProps extends ViewProps {
  size?: ControlSize | number;
  isDisabled?: boolean;
  value?: boolean;
}

const StyledCircle = (props: CircleProps) => {
  const {
    size = defaultProps.size,
    isDisabled,
    value,
    style,
    ...viewProps
  } = props;
  const theme = useTheme();

  const circleSize = getCircleSize(size, theme);
  const containerSize = getContainerSize(size, theme);

  const { circleColor, circlePosition } = useSpring({
    config: springDefaultConfig,

    circleColor: theme.colors.background.content,
    circlePosition: value ? containerSize - (circleSize + 6) : 0,
  });

  return (
    <AnimatedView
      // @ts-ignore
      style={[
        {
          alignItems: 'center',
          backgroundColor: theme.colors.background.content,
          borderRadius: 24,
          display: 'flex',
          height: circleSize,
          justifyContent: 'center',
          padding: 0,
          width: circleSize,
        },
        { backgroundColor: circleColor },
        { transform: [{ translateX: circlePosition }] },
        style,
      ]}
      {...viewProps}
    >
      {value ? (
        <Icon
          name="check"
          size="xsmall"
          color={
            isDisabled ? theme.colors.text.white : theme.colors.text.primary
          }
        />
      ) : (
        <Icon
          name="x"
          size="xsmall"
          color={
            isDisabled ? theme.colors.text.white : theme.colors.text.default
          }
        />
      )}
    </AnimatedView>
  );
};
