import * as React from 'react';
import { Picker as RNPicker, PickerProps } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import { PickerSize } from '../../theme/component-variables/pickerVariables';

export interface IPickerProps extends PickerProps {
  theme: ITheme;
  size?: PickerSize;
}

const PickerWithoutTheme = (props: IPickerProps) => {
  const { theme, size = 'medium', ...passThroughProps } = props;

  const { pickerStyle, itemStyle } = theme.getPickerStyles(size);

  return (
    <RNPicker
      itemStyle={itemStyle}
      style={[pickerStyle]}
      {...passThroughProps}
    />
  );
};

export const Picker = withTheme(PickerWithoutTheme);
export default Picker;
