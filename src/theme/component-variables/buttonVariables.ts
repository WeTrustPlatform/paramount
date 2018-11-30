import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export type IButtonColor = ViewStyle & {
  color: string;
  focusColor: string;
  loadingBackgroundColor?: string;
};

export interface IButtonColors {
  default: IButtonColor;
  danger: IButtonColor;
  primary: IButtonColor;
  secondary: IButtonColor;
}

export type ButtonColor = keyof IButtonColors;

export interface IButtonAppearance {
  minimal: IButtonColors;
  primary: IButtonColors;
  outline: IButtonColors;
}

export type ButtonAppearance = keyof IButtonAppearance;

export type ISizeStyles = ViewStyle & {
  borderRadius: number;
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface IButtonSizes {
  small: ISizeStyles;
  medium: ISizeStyles;
  large: ISizeStyles;
}

export type ButtonSize = keyof IButtonSizes;

export interface IButtonVariables {
  appearances: IButtonAppearance;
  disabled: {
    backgroundColor: string;
    color: string;
  };
  sizes: IButtonSizes;
  boxShadow: string;
}

export const getButtonVariables = (
  themeVariables: IThemeVariables,
): IButtonVariables => {
  return {
    appearances: {
      minimal: {
        default: {
          backgroundColor: themeVariables.colors.background.plain,
          color: themeVariables.colors.text.default,

          focusColor: themeVariables.colors.background.tint2,
        },

        danger: {
          backgroundColor: themeVariables.colors.background.plain,
          color: themeVariables.colors.text.danger,

          focusColor: themeVariables.colors.background.tint2,
        },
        primary: {
          backgroundColor: themeVariables.colors.background.plain,
          color: themeVariables.colors.text.primary,

          focusColor: themeVariables.colors.background.tint2,
        },
        secondary: {
          backgroundColor: themeVariables.colors.background.plain,
          color: themeVariables.colors.text.secondary
            ? themeVariables.colors.text.secondary
            : themeVariables.colors.text.default,

          focusColor: themeVariables.colors.background.tint2,
        },
      },
      primary: {
        default: {
          backgroundColor: themeVariables.colors.background.tint1,
          color: themeVariables.colors.text.default,

          focusColor: themeVariables.colors.background.tint2,
          loadingBackgroundColor: themeVariables.colors.background.overlay,
        },

        danger: {
          backgroundColor: themeVariables.colors.background.danger.default,
          color: 'white',

          focusColor: themeVariables.colors.background.danger.focus,
          loadingBackgroundColor:
            themeVariables.colors.background.danger.focusLight,
        },

        primary: {
          backgroundColor: themeVariables.colors.background.primary.default,
          color: 'white',

          focusColor: themeVariables.colors.background.primary.focus,
          loadingBackgroundColor:
            themeVariables.colors.background.primary.focusLight,
        },

        secondary: {
          backgroundColor: themeVariables.colors.background.secondary.default,
          color: 'white',

          focusColor: themeVariables.colors.background.secondary.focus,
          loadingBackgroundColor:
            themeVariables.colors.background.secondary.focusLight,
        },
      },

      outline: {
        default: {
          backgroundColor: themeVariables.colors.background.plain,
          borderColor: themeVariables.colors.text.default,
          borderWidth: 2,
          color: themeVariables.colors.text.default,

          focusColor: themeVariables.colors.background.tint2,
        },

        danger: {
          backgroundColor: themeVariables.colors.background.plain,
          borderColor: themeVariables.colors.border.danger,
          borderWidth: 2,
          color: themeVariables.colors.text.danger,

          focusColor: themeVariables.colors.background.danger.focusLight,
        },

        primary: {
          backgroundColor: themeVariables.colors.background.plain,
          borderColor: themeVariables.colors.border.primary,
          borderWidth: 2,
          color: themeVariables.colors.text.primary,

          focusColor: themeVariables.colors.background.primary.focusLight,
        },

        secondary: {
          backgroundColor: themeVariables.colors.background.plain,
          borderColor: themeVariables.colors.border.secondary,
          borderWidth: 2,
          color: themeVariables.colors.text.secondary,

          focusColor: themeVariables.colors.background.secondary.focusLight,
        },
      },
    },
    boxShadow: 'none',
    disabled: {
      backgroundColor: themeVariables.colors.background.disabled,

      color: themeVariables.colors.text.muted,
    },
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
