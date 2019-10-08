import dlv from 'dlv';
import * as React from 'react';
import { Picker as RNPicker, PickerProps as RNPickerProps } from 'react-native';

import { ControlSize, useTheme } from '../../theme';
import { isControlSize } from '../../utils/ControlSize';
import { getOverrides, WithOverrides } from '../../utils/Overrides';

export interface NativePickerOption<TValue extends string | number> {
  label: string;
  value: TValue;
}

interface NativePickerBaseProps<TValue extends string | number> {
  /**
   * The size of the picker.
   * @default "medium"
   */
  size?: ControlSize | number;

  /**
   * List of NativePickerItem items.
   */
  options?: NativePickerOption<TValue>[];

  /**
   * Callback invoked when a item is picked
   */
  onValueChange?: (itemValue: TValue, itemPosition: number) => void;

  /**
   * Value of the picker
   */
  value?: TValue | null;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
}

export interface NativePickerOverrides {
  Picker: PickerProps;
}

export interface NativePickerProps<TValue extends string | number>
  extends WithOverrides<NativePickerBaseProps<TValue>, NativePickerOverrides> {}

export const NativePicker = <TValue extends string | number>(
  props: NativePickerProps<TValue>,
) => {
  const {
    size = 'medium',
    options = [],
    value,
    testID,
    onValueChange,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Picker, pickerProps] = getOverrides(
    StyledPicker,
    props,
    {
      selectedValue: value,
      testID,
      size,
      onValueChange,
    },
    dlv(theme, 'overrides.NativePicker.Picker'),
    overrides.Picker,
  );

  return (
    <Picker {...pickerProps}>
      {options.map(option => (
        <RNPicker.Item
          key={`${option.value}`}
          value={option.value}
          label={option.label}
        />
      ))}
    </Picker>
  );
};

interface PickerProps extends RNPickerProps {
  size: ControlSize | number;
  children?: React.ReactNode;
}

const StyledPicker = (props: PickerProps) => {
  const { size, children, itemStyle, style, ...pickerProps } = props;
  const theme = useTheme();

  const controlSizeStyles = isControlSize(size)
    ? {
        small: {
          borderRadius: theme.controlBorderRadius.small,
          height: theme.controlHeights.small,
        },

        medium: {
          borderRadius: theme.controlBorderRadius.medium,
          height: theme.controlHeights.medium,
        },

        large: {
          borderRadius: theme.controlBorderRadius.large,
          height: theme.controlHeights.large,
        },
      }[size]
    : {
        borderRadius: theme.controlBorderRadius.medium,
        height: size,
      };

  const textSizeStyles = isControlSize(size)
    ? theme.textSizes[size]
    : theme.textSizes.medium;

  return (
    <RNPicker
      itemStyle={[
        {
          ...textSizeStyles,
          ...controlSizeStyles,
        },
        itemStyle,
      ]}
      style={[
        {
          backgroundColor: 'transparent',
          borderColor: theme.colors.border.default,
          borderWidth: 1,
          width: '100%',
          // @ts-ignore
          color: theme.colors.text.default,
          ...controlSizeStyles,
        },
        style,
      ]}
      {...pickerProps}
    >
      {children}
    </RNPicker>
  );
};
