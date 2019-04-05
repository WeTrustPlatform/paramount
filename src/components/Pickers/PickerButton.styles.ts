import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface PickerButtonSizes {
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
}

export type PickerButtonSize = keyof PickerButtonSizes;

export interface PickerButtonTextSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}

export type PickerButtonTextSize = keyof PickerButtonTextSizes;

export interface PickerButtonVariables {
  base: ViewStyle;
  disabled: ViewStyle;
  focus: ViewStyle;
  invalid: ViewStyle;
  placeholderTextColor: string;
  sizes: PickerButtonSizes;
  textSizes: PickerButtonTextSizes;
}

export const getPickerButtonVariables = (
  theme: Theme,
): PickerButtonVariables => {
  return {
    base: {
      borderColor: theme.colors.border.default,
      borderWidth: 1,
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
        height: theme.controlHeights.small,
        paddingLeft: theme.controlPaddings.small,
        paddingRight: 40,
      },

      medium: {
        borderRadius: theme.controlBorderRadius.medium,
        height: theme.controlHeights.medium,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: 40,
      },

      large: {
        borderRadius: theme.controlBorderRadius.large,
        height: theme.controlHeights.large,
        paddingLeft: theme.controlPaddings.large,
        paddingRight: 40,
      },
    },
    textSizes: {
      small: {
        fontSize: theme.textSizes.small,
      },

      medium: {
        fontSize: theme.textSizes.medium,
      },

      large: {
        fontSize: theme.textSizes.large,
      },
    },
  };
};

export interface PickerButtonStyles {
  containerStyle: ViewStyle;
  rightContainerStyle: ViewStyle;
  pickerStyle: ViewStyle;
  itemStyle: any;
}

export interface PickerButtonStylesProps {
  size: PickerButtonSize;
}
export type GetPickerButtonStyles = (
  pickerStylesProps: PickerButtonStylesProps,
  theme: Theme,
) => PickerButtonStyles;

export const getPickerButtonStyles: GetPickerButtonStyles = (
  pickerStylesProps,
  theme,
) => {
  const pickerVariables = getPickerButtonVariables(theme);
  const { base, sizes, textSizes } = pickerVariables;
  const { size } = pickerStylesProps;

  const controlSizeStyles = sizes[size];
  const textSizeStyles = textSizes[size];

  return {
    containerStyle: {
      backgroundColor: theme.colors.background.plain,
      position: 'relative',
    },
    itemStyle: {
      ...textSizeStyles,
    },
    pickerStyle: {
      backgroundColor: 'transparent',
      width: '100%',
      ...base,
      ...controlSizeStyles,
    },
    rightContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 8,
      position: 'absolute',
      right: 0,
      zIndex: -1,
    },
  };
};
