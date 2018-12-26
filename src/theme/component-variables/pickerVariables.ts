import { ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

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

export const getPickerVariables = (
  themeVariables: ThemeVariables,
): PickerVariables => {
  return {
    base: {
      backgroundColor: themeVariables.colors.background.plain,
      borderColor: themeVariables.colors.border.default,
      borderWidth: 1,
      color: themeVariables.colors.text.default,
    },
    disabled: {
      backgroundColor: themeVariables.colors.background.disabled,
    },
    focus: {},
    invalid: {
      borderColor: themeVariables.colors.border.danger,
    },
    placeholderTextColor: themeVariables.colors.text.muted,
    sizes: {
      small: {
        borderRadius: themeVariables.controlBorderRadius.small,
        fontSize: themeVariables.textSizes.small,
        height: themeVariables.controlHeights.small,
        paddingLeft: themeVariables.controlPaddings.small,
        paddingRight: themeVariables.controlPaddings.small,
      },

      medium: {
        borderRadius: themeVariables.controlBorderRadius.medium,
        fontSize: themeVariables.textSizes.medium,
        height: themeVariables.controlHeights.medium,
        paddingLeft: themeVariables.controlPaddings.medium,
        paddingRight: themeVariables.controlPaddings.medium,
      },

      large: {
        borderRadius: themeVariables.controlBorderRadius.large,
        fontSize: themeVariables.textSizes.large,
        height: themeVariables.controlHeights.large,
        paddingLeft: themeVariables.controlPaddings.large,
        paddingRight: themeVariables.controlPaddings.large,
      },
    },
  };
};
