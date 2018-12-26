import * as React from 'react';
import {
  Picker as RNPicker,
  PickerProps as RNPickerProps,
  ViewStyle,
} from 'react-native';

import { Theme, withTheme } from '../../theme';
import { PickerSize } from '../../theme/component-variables/pickerVariables';

export interface PickerProps extends RNPickerProps {
  theme: Theme;
  size?: PickerSize;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: {
    pickerStyle?: ViewStyle;
    itemStyle?: ViewStyle;
  };
}

const PickerBase = (props: PickerProps) => {
  const {
    theme,
    size = 'medium',
    dangerouslySetInlineStyle,
    ...pickerProps
  } = props;

  const { pickerStyle, itemStyle } = theme.getPickerStyles(size);

  return (
    <RNPicker
      itemStyle={{
        ...itemStyle,
        ...(dangerouslySetInlineStyle && dangerouslySetInlineStyle.itemStyle),
      }}
      style={{
        ...pickerStyle,
        ...(dangerouslySetInlineStyle && dangerouslySetInlineStyle.pickerStyle),
      }}
      {...pickerProps}
    />
  );
};

export const Picker = withTheme(PickerBase);
export default Picker;
