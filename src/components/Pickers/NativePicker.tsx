import * as React from 'react';
import { Picker as RNPicker } from 'react-native';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import {
  GetPickerButtonStyles,
  getPickerButtonStyles,
} from './PickerButton.styles';
import { PickerButtonWrapper } from './PickerButtonWrapper';

export interface NativePickerOption<TValue extends string | number> {
  label: string;
  value: TValue;
}

export interface NativePickerProps<TValue extends string | number> {
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
   * Callback to get element styles.
   */
  getStyles?: GetPickerButtonStyles;

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

export const NativePicker = <TValue extends string | number>(
  props: NativePickerProps<TValue>,
) => {
  const { getStyles, options = [], value, testID, onValueChange } = props;
  const theme = useTheme();

  const { pickerStyle, itemStyle } = mergeStyles(
    getPickerButtonStyles,
    getStyles,
  )(props, theme);

  return (
    <PickerButtonWrapper getStyles={getStyles}>
      <RNPicker
        itemStyle={itemStyle}
        style={pickerStyle}
        selectedValue={value}
        testID={testID}
        onValueChange={onValueChange}
      >
        {options.map(option => (
          <RNPicker.Item
            key={`${option.value}`}
            value={option.value}
            label={option.label}
          />
        ))}
      </RNPicker>
    </PickerButtonWrapper>
  );
};
