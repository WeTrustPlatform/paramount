import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

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

export const getButtonVariables = (theme: Theme): ButtonVariables => {
  return {
    appearances: {
      minimal: {
        default: {
          backgroundColor: theme.colors.background.content,
          color: theme.colors.text.default,

          focusColor: theme.colors.background.greyDefault,
        },

        danger: {
          backgroundColor: theme.colors.background.content,
          color: theme.colors.text.danger,

          focusColor: theme.colors.background.greyDefault,
        },
        primary: {
          backgroundColor: theme.colors.background.content,
          color: theme.colors.text.primary,

          focusColor: theme.colors.background.greyDefault,
        },
        secondary: {
          backgroundColor: theme.colors.background.content,
          color: theme.colors.text.secondary
            ? theme.colors.text.secondary
            : theme.colors.text.default,

          focusColor: theme.colors.background.greyDefault,
        },
      },
      primary: {
        default: {
          backgroundColor: theme.colors.background.greyLight,
          borderColor: theme.colors.border.default,
          color: theme.colors.text.default,

          focusColor: theme.colors.background.greyDefault,
          loadingBackgroundColor: theme.colors.background.overlay,
        },

        danger: {
          backgroundColor: theme.colors.background.dangerDefault,
          borderColor: theme.colors.border.danger,
          color: theme.colors.text.white,

          focusColor: theme.colors.background.dangerDark,
          loadingBackgroundColor: theme.colors.background.dangerLight,
        },

        primary: {
          backgroundColor: theme.colors.background.primaryDefault,
          borderColor: theme.colors.border.primary,
          color: theme.colors.text.white,

          focusColor: theme.colors.background.primaryDark,
          loadingBackgroundColor: theme.colors.background.primaryLight,
        },

        secondary: {
          backgroundColor: theme.colors.background.secondaryDefault,
          borderColor: theme.colors.border.secondary,
          color: theme.colors.text.white,

          focusColor: theme.colors.background.secondaryDark,
          loadingBackgroundColor: theme.colors.background.secondaryLight,
        },
      },

      outline: {
        default: {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.text.default,
          borderWidth: 3,
          color: theme.colors.text.default,

          focusColor: theme.colors.background.greyDefault,
        },

        danger: {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.danger,
          borderWidth: 3,
          color: theme.colors.text.danger,

          focusColor: theme.colors.background.dangerLight,
        },

        primary: {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.primary,
          borderWidth: 3,
          color: theme.colors.text.primary,

          focusColor: theme.colors.background.primaryLight,
        },

        secondary: {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.secondary,
          borderWidth: 3,
          color: theme.colors.text.secondary,

          focusColor: theme.colors.background.secondaryLight,
        },
      },
    },
    disabled: {
      backgroundColor: theme.colors.background.greyDark,

      color: theme.colors.text.muted,
    },
    sizes: {
      small: {
        borderRadius: theme.controlBorderRadius.small,
        fontSize: theme.textSizes.small.fontSize || 14,
        height: theme.controlHeights.small,
        paddingLeft: theme.controlPaddings.small * 2,
        paddingRight: theme.controlPaddings.small * 2,
      },

      medium: {
        borderRadius: theme.controlBorderRadius.medium,
        fontSize: theme.textSizes.medium.fontSize || 16,
        height: theme.controlHeights.medium,
        paddingLeft: theme.controlPaddings.medium * 2,
        paddingRight: theme.controlPaddings.medium * 2,
      },

      large: {
        borderRadius: theme.controlBorderRadius.large,
        fontSize: theme.textSizes.large.fontSize || 20,
        height: theme.controlHeights.large,
        paddingLeft: theme.controlPaddings.large * 2,
        paddingRight: theme.controlPaddings.large * 2,
      },
    },
  };
};

export interface ButtonStyles {
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  focusColor: string;
}

export interface ButtonStylesProps {
  appearance: ButtonAppearance;
  color: ButtonColor;
  size: ButtonSize;
  isDisabled: boolean;
  isLoading: boolean;
  isInline: boolean;
}
export type GetButtonStyles = (
  buttonStylesProps: ButtonStylesProps,
  theme: Theme,
) => ButtonStyles;

export const getButtonStyles: GetButtonStyles = (buttonStyleProps, theme) => {
  const {
    appearance,
    color,
    size,
    isDisabled,
    isLoading,
    isInline,
  } = buttonStyleProps;

  const { appearances, sizes, disabled, ...baseStyles } = getButtonVariables(
    theme,
  );

  const {
    color: textColor,
    focusColor,
    loadingBackgroundColor,
    ...buttonStyle
  } = appearances[appearance][color];

  const { fontSize, ...shapeStyles } = sizes[size];
  const { color: disabledButtonTextColor, ...disabledButtonStyles } = disabled;

  return {
    buttonStyle: {
      ...(isDisabled
        ? {
            ...disabledButtonStyles,
            ...shapeStyles,
          }
        : {
            ...shapeStyles,
            ...baseStyles,
            ...buttonStyle,
            ...(isLoading ? { backgroundColor: loadingBackgroundColor } : {}),
          }),
      ...(isInline
        ? {
            alignSelf: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }
        : {}),
    },
    focusColor,
    textStyle: {
      alignItems: 'center',
      color: isDisabled ? disabledButtonTextColor : textColor,
      display: 'flex',
      fontSize,
      fontWeight: '600',
      justifyContent: 'center',
      textAlign: 'center',
    },
  };
};
