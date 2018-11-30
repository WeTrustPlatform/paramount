import { ViewStyle } from 'react-native';

import {
  IPickerVariables,
  PickerSize,
} from '../component-variables/pickerVariables';

export interface IPickerStyles {
  pickerStyle: ViewStyle;
  itemStyle: any;
}

export type GetPickerStyles = (size: PickerSize) => IPickerStyles;

export const getPickerStyles = (
  buttonVariables: IPickerVariables,
): GetPickerStyles => (size: PickerSize): IPickerStyles => {
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
