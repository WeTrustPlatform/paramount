import * as React from 'react';
import { Picker as RNPicker, PickerProps as RNPickerProps } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetPickerStyles,
  getPickerStyles,
  PickerSize,
  PickerStyles,
} from './Picker.styles';

export interface PickerProps extends RNPickerProps {
  theme: Theme;
  size?: PickerSize;
  /**
   * Inline styles for components
   */
  getStyles?: ReplaceReturnType<GetPickerStyles, DeepPartial<PickerStyles>>;
}

const PickerBase = (props: PickerProps) => {
  const { theme, size = 'medium', getStyles, ...pickerProps } = props;

  const { pickerStyle, itemStyle } = mergeStyles(getPickerStyles, getStyles)(
    { size },
    theme,
  );

  return (
    <RNPicker itemStyle={itemStyle} style={pickerStyle} {...pickerProps} />
  );
};

export const Picker = withTheme(PickerBase);
export default Picker;
