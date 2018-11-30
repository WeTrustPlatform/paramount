import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export type IPickerAppearanceStyles = ViewStyle & {
  backgroundColor: string;
  borderColor: string;
  boxShadow: string;
  color: string;
};

export type IBaseState = IPickerAppearanceStyles;
export type IDisabledState = Partial<IPickerAppearanceStyles>;
export type IInvalidState = Partial<IPickerAppearanceStyles>;
export type IFocusState = Partial<IPickerAppearanceStyles>;

export type ISizeStyles = ViewStyle & {
  borderRadius: number;
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface IPickerSizes {
  small: ISizeStyles;
  medium: ISizeStyles;
  large: ISizeStyles;
}

export type PickerSize = keyof IPickerSizes;

export interface IPickerVariables {
  base: IBaseState;
  disabled: IDisabledState;
  focus: IFocusState;
  invalid: IInvalidState;
  placeholderTextColor: string;
  sizes: IPickerSizes;
}

export const getPickerVariables = (
  themeVariables: IThemeVariables,
): IPickerVariables => {
  return {
    base: {
      backgroundColor: themeVariables.colors.background.plain,
      borderColor: themeVariables.colors.border.default,
      borderWidth: 1,
      boxShadow: 'none',
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
