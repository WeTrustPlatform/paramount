import { ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

export type ButtonColorProps = ViewStyle & {
  color: string;
  focusColor: string;
  loadingBackgroundColor?: string;
};

export interface ButtonColors {
  default: ButtonColorProps;
  danger: ButtonColorProps;
  primary: ButtonColorProps;
  secondary: ButtonColorProps;
}

export type ButtonColor = keyof ButtonColors;

export interface ButtonAppearances {
  minimal: ButtonColors;
  primary: ButtonColors;
  outline: ButtonColors;
}

export type ButtonAppearance = keyof ButtonAppearances;

export type SizeStyles = ViewStyle & {
  borderRadius: number;
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface ButtonSizes {
  small: SizeStyles;
  medium: SizeStyles;
  large: SizeStyles;
}

export type ButtonSize = keyof ButtonSizes;

export interface ButtonVariables {
  appearances: ButtonAppearances;
  disabled: {
    backgroundColor: string;
    color: string;
  };
  sizes: ButtonSizes;
}

export const getButtonVariables = (
  themeVariables: ThemeVariables,
): ButtonVariables => {
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
          borderColor: themeVariables.colors.border.default,
          borderWidth: 1,
          color: themeVariables.colors.text.default,

          focusColor: themeVariables.colors.background.tint2,
          loadingBackgroundColor: themeVariables.colors.background.overlay,
        },

        danger: {
          backgroundColor: themeVariables.colors.background.danger.default,
          borderColor: themeVariables.colors.border.danger,
          borderWidth: 1,
          color: 'white',

          focusColor: themeVariables.colors.background.danger.focus,
          loadingBackgroundColor:
            themeVariables.colors.background.danger.focusLight,
        },

        primary: {
          backgroundColor: themeVariables.colors.background.primary.default,
          borderColor: themeVariables.colors.border.primary,
          borderWidth: 1,
          color: 'white',

          focusColor: themeVariables.colors.background.primary.focus,
          loadingBackgroundColor:
            themeVariables.colors.background.primary.focusLight,
        },

        secondary: {
          backgroundColor: themeVariables.colors.background.secondary.default,
          borderColor: themeVariables.colors.border.secondary,
          borderWidth: 1,
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
