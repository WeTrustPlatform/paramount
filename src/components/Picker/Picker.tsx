import * as React from 'react';
import { Picker as RNPicker, PickerProps as RNPickerProps } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { GetPickerStyles, getPickerStyles, PickerSize } from './Picker.styles';

export interface PickerProps extends RNPickerProps {
  theme: Theme;
  size?: PickerSize;
  /**
   * Inline styles for components
   */
  getStyles?: GetPickerStyles;
}

const PickerBase = (props: PickerProps) => {
  const {
    theme,
    size = 'medium',
    getStyles = getPickerStyles,
    ...pickerProps
  } = props;

  const { pickerStyle, itemStyle } = getPickerStyles({ size }, theme);

  return (
    <RNPicker itemStyle={itemStyle} style={pickerStyle} {...pickerProps} />
  );
};

export const Picker = withTheme(PickerBase);
export default Picker;
