import { TextStyle, ViewStyle } from 'react-native';

import {
  SelectListSize,
  SelectListVariables,
} from '../component-variables/selectListVariables';

export interface SelectListStyles {
  containerStyle: ViewStyle;
  focusBackgroundColor: string;
  textStyle: TextStyle;
}

export type GetSelectListStyles = (
  size: SelectListSize,
  isDisabled: boolean,
  isSelected: boolean,
) => SelectListStyles;

export const getSelectListStyles = (
  selectListVariables: SelectListVariables,
): GetSelectListStyles => (size, isDisabled, isSelected): SelectListStyles => {
  const {
    base,
    disabled,
    selected,
    focusBackgroundColor,
    sizes,
    textSizes,
  } = selectListVariables;

  const { fontSize, ...sizeStyles } = sizes[size];

  return {
    containerStyle: {
      ...base,
      ...sizeStyles,
      ...(isSelected ? selected : {}),
      ...(isDisabled ? disabled : {}),
    },
    focusBackgroundColor,
    textStyle: textSizes[size],
  };
};
