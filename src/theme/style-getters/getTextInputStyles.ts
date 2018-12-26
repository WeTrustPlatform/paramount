import { TextStyle } from 'react-native';

import {
  TextInputSize,
  TextInputVariables,
} from '../component-variables/textInputVariables';

export interface TextInputStyles {
  inputStyle: TextStyle;
  focusedStyle: TextStyle;
  placeholderTextColor: string;
}

export type GetTextInputStyles = (
  size: TextInputSize,
  isDisabled: boolean,
  isInvalid: boolean,
) => TextInputStyles;

export const getTextInputStyles = (
  textInputVariables: TextInputVariables,
): GetTextInputStyles => (size, isDisabled, isInvalid): TextInputStyles => {
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
