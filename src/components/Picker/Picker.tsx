import * as React from 'react';
import { Picker as RNPicker, PickerProps, ViewStyle } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import { PickerSize } from '../../theme/component-variables/pickerVariables';

export interface IPickerProps extends PickerProps {
  theme: ITheme;
  size?: PickerSize;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: {
    pickerStyle?: ViewStyle;
    itemStyle?: ViewStyle;
  };
}

const PickerBase = (props: IPickerProps) => {
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
