import { TextStyle } from 'react-native';

import { ControlSize, Theme } from '../../theme/ThemeInterface';

export interface TextInputVariables {
  base: TextStyle;
  disabled: TextStyle;
  focus: TextStyle;
  invalid: TextStyle;
  placeholderTextColor: string;
  sizes: { [size in ControlSize]: TextStyle };
}

export const getTextInputVariables = (theme: Theme): TextInputVariables => {
  return {
    base: {
      backgroundColor: theme.colors.background.content,
      borderColor: theme.colors.border.default,
      borderWidth: 1,
      color: theme.colors.text.default,
      width: '100%',
    },
    disabled: {
      backgroundColor: theme.colors.background.greyDark,
    },
    focus: {},
    invalid: {
      borderColor: theme.colors.border.danger,
    },
    placeholderTextColor: theme.colors.text.muted,
    sizes: {
      small: {
        borderRadius: theme.controlBorderRadius.small,
        fontSize: theme.textSizes.small.fontSize || 14,
        height: theme.controlHeights.small,
        paddingLeft: theme.controlPaddings.small,
        paddingRight: theme.controlPaddings.small,
      },

      medium: {
        borderRadius: theme.controlBorderRadius.medium,
        fontSize: theme.textSizes.medium.fontSize || 16,
        height: theme.controlHeights.medium,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: theme.controlPaddings.medium,
      },

      large: {
        borderRadius: theme.controlBorderRadius.large,
        fontSize: theme.textSizes.large.fontSize || 18,
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
  size: ControlSize;
  isDisabled: boolean;
  isInvalid: boolean;
  numberOfLines?: number;
}

export type GetTextInputStyles = (
  textInputStylesProps: TextInputStylesProps,
  theme: Theme,
) => TextInputStyles;

export const getTextInputStyles: GetTextInputStyles = (
  { size, isDisabled, isInvalid, numberOfLines },
  theme,
) => {
  const textInputVariables = getTextInputVariables(theme);
  const controlHeight = theme.controlHeights[size];

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
      ...(numberOfLines
        ? {
            height: numberOfLines * controlHeight,
            paddingVertical: 16,
          }
        : {}),
    },
    placeholderTextColor,
  };
};
