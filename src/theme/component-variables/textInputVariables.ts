import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export type ITextInputAppearanceStyles = ViewStyle & {
  backgroundColor: string;
  borderColor: string;
  color: string;
};

export type IBaseState = ITextInputAppearanceStyles;
export type IDisabledState = Partial<ITextInputAppearanceStyles>;
export type IInvalidState = Partial<ITextInputAppearanceStyles>;
export type IFocusState = Partial<ITextInputAppearanceStyles>;

export type ISizeStyles = ViewStyle & {
  borderRadius: number;
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface ITextInputSizes {
  small: ISizeStyles;
  medium: ISizeStyles;
  large: ISizeStyles;
}

export type TextInputSize = keyof ITextInputSizes;

export interface ITextInputVariables {
  base: IBaseState;
  disabled: IDisabledState;
  focus: IFocusState;
  invalid: IInvalidState;
  placeholderTextColor: string;
  sizes: ITextInputSizes;
}

export const getTextInputVariables = (
  themeVariables: IThemeVariables,
): ITextInputVariables => {
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
