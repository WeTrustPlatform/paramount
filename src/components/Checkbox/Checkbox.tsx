import dlv from 'dlv';
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

interface CheckboxBaseProps {
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

export interface CheckboxProps
  extends WithOverrides<CheckboxBaseProps, CheckboxOverrides> {}

export const Checkbox = (props: CheckboxProps) => {
  const {
    size = 'medium',
    shape = 'rounded',
    value = false,
    isDisabled = false,
    onValueChange = () => {
      return;
    },
    testID,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Touchable, touchableProps] = getOverrides(
    StyledTouchable,
    props,
    dlv(theme, 'overrides.Checkbox.Touchable'),
    overrides.Touchable,
  );
  const [Check, checkProps] = getOverrides(
    StyledCheck,
    props,
    dlv(theme, 'overrides.Checkbox.Check'),
    overrides.Check,
  );

  return (
    <Touchable
      size={size}
      shape={shape}
      isDisabled={isDisabled}
      testID={testID}
      onPress={() => onValueChange(!value)}
      {...touchableProps}
    >
      <Check
        value={value}
        size={size}
        shape={shape}
        isDisabled={isDisabled}
        {...checkProps}
      />
    </Touchable>
  );
};

interface TouchableProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  size: ControlSize | number;
  isDisabled: boolean;
  shape: ContainerShape;
}

const StyledTouchable = (props: TouchableProps) => {
  const { size, shape, isDisabled, children, style, ...touchableProps } = props;
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[theme.containerShapes[shape], style]}
      disabled={isDisabled}
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
  shape: ContainerShape;
}

const StyledCheck = (props: CheckProps) => {
  const { size, shape, value, isDisabled, style, ...viewProps } = props;
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
