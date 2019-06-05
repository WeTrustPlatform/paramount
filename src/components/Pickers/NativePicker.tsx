import * as React from 'react';
import { Picker as RNPicker, PickerProps as RNPickerProps } from 'react-native';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { PickerButtonGetStylesProp } from './PickerButton';
import { getPickerButtonStyles } from './PickerButton.styles';
import { PickerButtonWrapper } from './PickerButtonWrapper';

export interface NativePickerProps extends RNPickerProps {
  size?: ControlSize;
  innerRef?: React.Ref<RNPicker>;
  /**
   * Inline styles for components
   */
  getStyles?: PickerButtonGetStylesProp;
}

const NativePickerBase = (props: NativePickerProps) => {
  const { size = 'medium', getStyles, innerRef, ...pickerProps } = props;
  const theme = useTheme();

  const { pickerStyle, itemStyle } = mergeStyles(
    getPickerButtonStyles,
    getStyles,
  )({ size }, theme);

  return (
    <PickerButtonWrapper>
      <RNPicker
        ref={innerRef}
        itemStyle={itemStyle}
        style={pickerStyle}
        {...pickerProps}
      />
    </PickerButtonWrapper>
  );
};

export const NativePicker = React.forwardRef<RNPicker, RNPickerProps>(
  (props, ref) => {
    return <NativePickerBase {...props} innerRef={ref} />;
  },
);
