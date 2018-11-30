import { ViewStyle } from 'react-native';

import { ITextStyleProps } from '../../components/Typography/Text';
import {
  ISelectListVariables,
  SelectListSize,
} from '../component-variables/selectListVariables';

export interface ISelectListStyles {
  containerStyle: ViewStyle;
  focusBackgroundColor: string;
  textStyle: ITextStyleProps;
}

export type GetSelectListStyles = (
  size: SelectListSize,
  isDisabled: boolean,
  isSelected: boolean,
) => ISelectListStyles;

export const getSelectListStyles = (
  selectListVariables: ISelectListVariables,
): GetSelectListStyles => (size, isDisabled, isSelected): ISelectListStyles => {
  const {
    base,
    disabled,
    selected,
    focusBackgroundColor,
    sizes,
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
    textStyle: {
      size,
    },
  };
};
