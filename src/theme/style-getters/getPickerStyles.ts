import { ViewStyle } from 'react-native';

import {
  PickerSize,
  PickerVariables,
} from '../component-variables/pickerVariables';

export interface PickerStyles {
  pickerStyle: ViewStyle;
  itemStyle: any;
}

export type GetPickerStyles = (size: PickerSize) => PickerStyles;

export const getPickerStyles = (
  buttonVariables: PickerVariables,
): GetPickerStyles => (size: PickerSize): PickerStyles => {
  const { base, sizes } = buttonVariables;

  const { fontSize, ...sizeStyles } = sizes[size];

  return {
    itemStyle: {
      fontSize,
    },
    pickerStyle: {
      ...base,
      ...sizeStyles,
    },
  };
};
