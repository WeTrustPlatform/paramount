import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/overrides';
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
  Touchable: TouchableProps;
  Count: CountProps;
  IconPlus: CounterIconProps;
  IconMinus: CounterIconProps;
}

export interface CounterProps
  extends WithOverrides<CounterBaseProps, CounterOverrides> {}

export const Counter = (props: CounterProps) => {
  const {
    value = 0,
    max,
    min,
    step = 1,
    onValueChange = () => {
      return;
    },
    overrides = {},
  } = props;

  const isDecrementDisabled = min === value;
  const isIncrementDisabled = max === value;

  const [Root, rootProps] = getOverrides(StyledRoot, props, overrides.Root);
  const [Touchable, touchableProps] = getOverrides(
    StyledTouchable,
    props,
    overrides.Touchable,
  );
  const [Count, countProps] = getOverrides(StyledCount, props, overrides.Count);
  const [IconPlus, iconPlusProps] = getOverrides(
    StyledIconPlus,
    props,
    overrides.IconPlus,
  );
  const [IconMinus, iconMinusProps] = getOverrides(
    StyledIconMinus,
    props,
    overrides.IconMinus,
  );

  const handleIncrement = React.useCallback(() => {
    onValueChange(value + step);
  }, [value]);

  const handleDecrement = React.useCallback(() => {
    onValueChange(value - step);
  }, [value]);

  return (
    <Root {...rootProps}>
      <Touchable
        isDisabled={isDecrementDisabled}
        onPress={handleDecrement}
        {...touchableProps}
      >
        <IconMinus isDisabled={isDecrementDisabled} {...iconMinusProps} />
      </Touchable>
      <Count value={value} {...countProps} />
      <Touchable
        isDisabled={isIncrementDisabled}
        onPress={handleIncrement}
        {...touchableProps}
      >
        <IconPlus isDisabled={isIncrementDisabled} {...iconPlusProps} />
      </Touchable>
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
      style={[{ paddingHorizontal: 16, minWidth: 56 }, style]}
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
  const { children, style, isDisabled, onPress, ...touchableProps } = props;
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
  isDisabled?: boolean;
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
  isDisabled?: boolean;
}

const StyledIconPlus = (props: CounterIconProps) => (
  <StyledIcon name="plus" {...props} />
);
const StyledIconMinus = (props: CounterIconProps) => (
  <StyledIcon name="minus" {...props} />
);
