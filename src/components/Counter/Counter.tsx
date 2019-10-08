import dlv from 'dlv';
import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, getStyle, WithOverrides } from '../../utils/Overrides';
import { Icon, IconProps } from '../Icon';
import { Text, TextProps } from '../Typography';

interface CounterBaseProps {
  /**
   * Count to be displayed.
   */
  value?: number;

  /**
   * Minimum value for the counter. Upon reaching the limit, it will disable decrement button.
   */
  min?: number;

  /**
   * Maximum value for the counter. Upon reaching the limit, it will disable increment button.
   */
  max?: number;

  /**
   * Interval between counts
   */
  step?: number;

  /**
   * Called when either buttons are pressed.
   */
  onValueChange?: (value: number) => void;
}

export interface CounterOverrides {
  Root: RootProps;
  Increment: TouchableProps;
  Decrement: TouchableProps;
  Count: CountProps;
  IconPlus: CounterIconProps;
  IconMinus: CounterIconProps;
}

export interface CounterProps
  extends WithOverrides<CounterBaseProps, CounterOverrides> {}

export const Counter = (props: CounterProps) => {
  const {
    value = 0,
    step = 1,
    max,
    min,
    onValueChange = () => {
      return;
    },
    overrides = {},
  } = props;
  const theme = useTheme();

  const isDecrementDisabled = min === value;
  const isIncrementDisabled = max === value;

  const handleIncrement = React.useCallback(() => {
    onValueChange(value + step);
  }, [value]);

  const handleDecrement = React.useCallback(() => {
    onValueChange(value - step);
  }, [value]);

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    {},
    dlv(theme, 'overrides.Counter.Root'),
    overrides.Root,
  );
  const [Decrement, decrementProps] = getOverrides(
    StyledTouchable,
    props,
    {
      isDisabled: isDecrementDisabled,
      onPress: handleDecrement,
    },
    dlv(theme, 'overrides.Counter.Decrement'),
    overrides.Decrement,
  );
  const [Increment, incrementProps] = getOverrides(
    StyledTouchable,
    props,
    {
      isDisabled: isIncrementDisabled,
      onPress: handleIncrement,
    },
    dlv(theme, 'overrides.Counter.Increment'),
    overrides.Increment,
  );
  const [Count, countProps] = getOverrides(
    StyledCount,
    props,
    { value },
    dlv(theme, 'overrides.Counter.Count'),
    overrides.Count,
  );
  const [IconPlus, iconPlusProps] = getOverrides(
    StyledIconPlus,
    props,
    { isDisabled: isIncrementDisabled },
    dlv(theme, 'overrides.Counter.IconPlus'),
    overrides.IconPlus,
  );
  const [IconMinus, iconMinusProps] = getOverrides(
    StyledIconMinus,
    props,
    { isDisabled: isDecrementDisabled },
    dlv(theme, 'overrides.Counter.IconMinus'),
    overrides.IconMinus,
  );

  return (
    <Root {...rootProps}>
      <Decrement {...decrementProps}>
        <IconMinus {...iconMinusProps} />
      </Decrement>
      <Count {...countProps} />
      <Increment {...incrementProps}>
        <IconPlus {...iconPlusProps} />
      </Increment>
    </Root>
  );
};

interface PropsWithChildren {
  children?: React.ReactNode;
}

interface RootProps extends ViewProps, PropsWithChildren {}

const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View
      style={[
        {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface CountProps extends TextProps {
  value: number;
}

const StyledCount = (props: CountProps) => {
  const { value, style, ...textProps } = props;

  return (
    <Text
      align="center"
      style={[{ paddingHorizontal: 16, minWidth: 56 }, getStyle(props, style)]}
      {...textProps}
    >
      {value}
    </Text>
  );
};

interface TouchableProps extends TouchableOpacityProps, PropsWithChildren {
  isDisabled: boolean;
}

const StyledTouchable = (props: TouchableProps) => {
  const {
    children,
    style,
    isDisabled = false,
    onPress,
    ...touchableProps
  } = props;
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          alignItems: 'center',
          borderColor: theme.colors.border.primary,
          borderRadius: 999,
          borderWidth: 1,
          display: 'flex',
          height: 40,
          justifyContent: 'center',
          width: 40,
          ...(isDisabled && { borderColor: theme.colors.border.default }),
        },
        style,
      ]}
      disabled={isDisabled}
      onPress={!isDisabled ? onPress : undefined}
      {...touchableProps}
    >
      {children}
    </TouchableOpacity>
  );
};

interface StyledIconProps extends IconProps {
  isDisabled: boolean;
}

const StyledIcon = (props: StyledIconProps) => {
  const { isDisabled, name, ...iconProps } = props;
  const theme = useTheme();

  return (
    <Icon
      name={name}
      size="xsmall"
      color={isDisabled ? theme.colors.text.muted : theme.colors.text.primary}
      {...iconProps}
    />
  );
};

interface CounterIconProps {
  isDisabled: boolean;
}

const StyledIconPlus = (props: CounterIconProps) => (
  <StyledIcon name="plus" {...props} />
);
const StyledIconMinus = (props: CounterIconProps) => (
  <StyledIcon name="minus" {...props} />
);
