import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export type PickerAppearanceStyles = ViewStyle & {
  backgroundColor: string;
  borderColor: string;
  color: string;
};

export type BaseState = PickerAppearanceStyles;
export type DisabledState = Partial<PickerAppearanceStyles>;
export type InvalidState = Partial<PickerAppearanceStyles>;
export type FocusState = Partial<PickerAppearanceStyles>;

export type SizeStyles = ViewStyle & {
  borderRadius: number;
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface PickerSizes {
  small: SizeStyles;
  medium: SizeStyles;
  large: SizeStyles;
}

export type PickerSize = keyof PickerSizes;

export interface PickerVariables {
  base: BaseState;
  disabled: DisabledState;
  focus: FocusState;
  invalid: InvalidState;
  placeholderTextColor: string;
  sizes: PickerSizes;
}

export const getPickerVariables = (theme: Theme): PickerVariables => {
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

export interface PickerStyles {
  pickerStyle: ViewStyle;
  itemStyle: any;
}

export interface PickerStylesProps {
  size: PickerSize;
}
export type GetPickerStyles = (
  pickerStylesProps: PickerStylesProps,
  theme: Theme,
) => PickerStyles;

export const getPickerStyles: GetPickerStyles = (pickerStylesProps, theme) => {
  const pickerVariables = getPickerVariables(theme);
  const { base, sizes } = pickerVariables;
  const { size } = pickerStylesProps;

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
