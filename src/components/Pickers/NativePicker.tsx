import * as React from 'react';
import { Picker as RNPicker, PickerProps as RNPickerProps } from 'react-native';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { PickerButtonGetStylesProp } from './PickerButton';
import { getPickerButtonStyles } from './PickerButton.styles';
import { PickerButtonWrapper } from './PickerButtonWrapper';

export interface NativePickerOption {
  label: string;
  value: string;
}

export interface NativePickerProps extends RNPickerProps {
  /**
   * The size of the picker.
   * @default "medium"
   */
  size?: ControlSize | number;
  /**
   * List of NativePickerItem items.
   */
  options: NativePickerOption[];

  /**
   * Callback to get element styles.
   */
  getStyles?: PickerButtonGetStylesProp;

  innerRef?: React.Ref<RNPicker>;
}

const NativePickerBase = (props: NativePickerProps) => {
  const {
    size = 'medium',
    getStyles,
    innerRef,
    options,
    ...pickerProps
  } = props;
  const theme = useTheme();

  const { pickerStyle, itemStyle } = mergeStyles(
    getPickerButtonStyles,
    getStyles,
  )(props, theme);

  return (
    <PickerButtonWrapper getStyles={getStyles}>
      <RNPicker
        ref={innerRef}
        itemStyle={itemStyle}
        style={pickerStyle}
        {...pickerProps}
      >
        {options.map(option => (
          <RNPicker.Item value={option.value} label={option.label} />
        ))}
      </RNPicker>
    </PickerButtonWrapper>
  );
};

export const NativePicker = React.forwardRef<RNPicker, NativePickerProps>(
  (props, ref) => {
    return <NativePickerBase {...props} innerRef={ref} />;
  },
);
