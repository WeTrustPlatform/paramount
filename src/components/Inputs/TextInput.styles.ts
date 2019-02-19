import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export type SizeStyles = ViewStyle & {
  borderRadius: number;
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface TextInputSizes {
  small: SizeStyles;
  medium: SizeStyles;
  large: SizeStyles;
}

export type TextInputSize = keyof TextInputSizes;

export interface TextInputVariables {
  base: TextStyle;
  disabled: TextStyle;
  focus: TextStyle;
  invalid: TextStyle;
  placeholderTextColor: string;
  sizes: TextInputSizes;
}

export const getTextInputVariables = (theme: Theme): TextInputVariables => {
  return {
    base: {
      backgroundColor: theme.colors.background.plain,
      borderColor: theme.colors.border.default,
      borderWidth: 1,
      color: theme.colors.text.default,
    },
    disabled: {
      backgroundColor: theme.colors.background.disabled,
    },
    focus: {},
    invalid: {
      borderColor: theme.colors.border.danger,
    },
    placeholderTextColor: theme.colors.text.muted,
    sizes: {
      small: {
        borderRadius: theme.controlBorderRadius.small,
        fontSize: theme.textSizes.small,
        height: theme.controlHeights.small,
        paddingLeft: theme.controlPaddings.small,
        paddingRight: theme.controlPaddings.small,
      },

      medium: {
        borderRadius: theme.controlBorderRadius.medium,
        fontSize: theme.textSizes.medium,
        height: theme.controlHeights.medium,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: theme.controlPaddings.medium,
      },

      large: {
        borderRadius: theme.controlBorderRadius.large,
        fontSize: theme.textSizes.large,
        height: theme.controlHeights.large,
        paddingLeft: theme.controlPaddings.large,
        paddingRight: theme.controlPaddings.large,
      },
    },
  };
};

export interface TextInputStyles {
  inputStyle: TextStyle;
  focusedStyle: TextStyle;
  placeholderTextColor: string;
}

export interface TextInputStylesProps {
  size: TextInputSize;
  isDisabled: boolean;
  isClearable: boolean;
  isInvalid: boolean;
}

export type GetTextInputStyles = (
  textInputStylesProps: TextInputStylesProps,
  theme: Theme,
) => TextInputStyles;

export const getTextInputStyles: GetTextInputStyles = (
  { size, isDisabled, isInvalid },
  theme,
) => {
  const textInputVariables = getTextInputVariables(theme);

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
