import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import { ContainerShape, ControlSize, useTheme } from '../../theme';
import { isControlSize } from '../../utils/isControlSize';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Icon } from '../Icon';

export interface CheckboxBaseProps {
  /**
   * The size of the checkbox.
   * @default "medium"
   */
  size?: ControlSize | number;

  /**
   * When true, will display as checked.
   * @default false
   */
  value: boolean;

  /**
   * When true, the checkbox is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * When true, checkbox will be interactive.
   * @default true
   */
  isInteractive?: boolean;

  /**
   * Shape of the checkbox.
   * @default "rounded"
   */
  shape?: ContainerShape;

  /**
   * Called when checkbox is pressed.
   */
  onValueChange?: (value: boolean) => void;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export interface CheckboxOverrides {
  Touchable: TouchableProps;
  Check: CheckProps;
}

type CheckboxProps = WithOverrides<CheckboxBaseProps, CheckboxOverrides>;

export const Checkbox = (props: CheckboxProps) => {
  const {
    size = 'medium',
    shape = 'rounded',
    value = false,
    isDisabled = false,
    isInteractive = true,
    onValueChange = () => {
      return;
    },
    testID,
    overrides = {},
  } = props;

  const [Touchable, touchableProps] = getOverrides(
    StyledTouchable,
    props,
    overrides.Touchable,
  );
  const [Check, checkProps] = getOverrides(StyledCheck, props, overrides.Check);

  return (
    <Touchable
      size={size}
      shape={shape}
      accessible={isInteractive}
      isDisabled={isDisabled}
      isInteractive={isInteractive}
      testID={testID}
      onPress={() => onValueChange(!value)}
      {...touchableProps}
    >
      <Check
        value={value}
        size={size}
        shape={shape}
        isDisabled={isDisabled}
        isInteractive={isInteractive}
        {...checkProps}
      />
    </Touchable>
  );
};

interface TouchableProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  size: ControlSize | number;
  isDisabled: boolean;
  isInteractive: boolean;
  shape: ContainerShape;
}

const StyledTouchable = (props: TouchableProps) => {
  const {
    size,
    isDisabled,
    isInteractive,
    shape,
    children,
    style,
    ...touchableProps
  } = props;
  const theme = useTheme();

  return (
    <TouchableOpacity
      accessible={isInteractive}
      style={[theme.containerShapes[shape], style]}
      disabled={isDisabled || !isInteractive}
      {...touchableProps}
    >
      {children}
    </TouchableOpacity>
  );
};

interface CheckProps extends ViewProps {
  size: ControlSize | number;
  value: boolean;
  isDisabled: boolean;
  isInteractive: boolean;
  shape: ContainerShape;
}

const StyledCheck = (props: CheckProps) => {
  const { size, value, style, isDisabled, shape, ...viewProps } = props;
  const theme = useTheme();

  const sizeValue = isControlSize(size)
    ? theme.controlHeights[size] - 16
    : size;

  return (
    <View
      style={[
        {
          alignItems: 'center',
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.default,
          borderWidth: 1,
          height: sizeValue,
          justifyContent: 'center',
          width: sizeValue,
          ...(value
            ? {
                backgroundColor: theme.colors.background.primaryDefault,
                borderColor: 'transparent',
              }
            : {}),
          ...(isDisabled
            ? {
                backgroundColor: theme.colors.background.greyDark,
                borderColor: theme.colors.border.default,
              }
            : {}),
          ...theme.containerShapes[shape],
        },
        style,
      ]}
      {...viewProps}
    >
      {value ? (
        <Icon name="check" size="xsmall" color={theme.colors.text.white} />
      ) : null}
    </View>
  );
};
