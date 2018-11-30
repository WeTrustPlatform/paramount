import { TextStyle } from 'react-native';

import {
  ITextInputVariables,
  TextInputSize,
} from '../component-variables/textInputVariables';

export interface ITextInputStyles {
  inputStyle: TextStyle;
  focusedStyle: TextStyle;
  placeholderTextColor: string;
}

export type GetTextInputStyles = (
  size: TextInputSize,
  isDisabled: boolean,
  isInvalid: boolean,
) => ITextInputStyles;

export const getTextInputStyles = (
  textInputVariables: ITextInputVariables,
): GetTextInputStyles => (size, isDisabled, isInvalid): ITextInputStyles => {
  const {
    base,
    disabled,
    focus,
    invalid,
    placeholderTextColor,
    sizes,
  } = textInputVariables;

  const sizeStyles = sizes[size];

  return {
    focusedStyle: focus,
    inputStyle: {
      ...base,
      ...sizeStyles,
      ...(isDisabled ? disabled : {}),
      ...(isInvalid ? invalid : {}),
    },
    placeholderTextColor,
  };
};
