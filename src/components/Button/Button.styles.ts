import { TextStyle, ViewStyle } from 'react-native';

import { ButtonColor, Theme } from '../../theme/ThemeInterface';
import { darken } from './changeColor';

export type ButtonColorProps = ViewStyle & {
  backgroundColor: string;
  color: string;
  loadingBackgroundColor?: string;
};

export interface ButtonAppearances {
  minimal: { [size in ButtonColor]: ButtonColorProps };
  primary: { [size in ButtonColor]: ButtonColorProps };
  outline: { [size in ButtonColor]: ButtonColorProps };
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
        },

        danger: {
          backgroundColor: theme.colors.background.content,
          color: theme.colors.text.danger,
        },
        primary: {
          backgroundColor: theme.colors.background.content,
          color: theme.colors.text.primary,
        },
        secondary: {
          backgroundColor: theme.colors.background.content,
          color: theme.colors.text.secondary,
        },
      },
      primary: {
        default: {
          backgroundColor: theme.colors.button.default,
          color: theme.colors.button.defaultText,

          loadingBackgroundColor: theme.colors.background.overlay,
        },

        danger: {
          backgroundColor: theme.colors.button.danger,
          color: theme.colors.button.dangerText,

          loadingBackgroundColor: theme.colors.background.dangerLight,
        },

        primary: {
          backgroundColor: theme.colors.button.primary,
          color: theme.colors.button.primaryText,

          loadingBackgroundColor: theme.colors.background.primaryLight,
        },

        secondary: {
          backgroundColor: theme.colors.button.secondary,
          color: theme.colors.button.secondaryText,

          loadingBackgroundColor: theme.colors.background.secondaryLight,
        },
      },

      outline: {
        default: {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.text.default,
          borderWidth: 3,
          color: theme.colors.text.default,
        },

        danger: {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.danger,
          borderWidth: 3,
          color: theme.colors.text.danger,
        },

        primary: {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.primary,
          borderWidth: 3,
          color: theme.colors.text.primary,
        },

        secondary: {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.secondary,
          borderWidth: 3,
          color: theme.colors.text.secondary,
        },
      },
    },
    disabled: {
      backgroundColor: theme.colors.button.disabled,

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
  innerButtonWrapperStyle: ViewStyle;
  buttonContentWrapperStyle: ViewStyle;
}

export interface ButtonStylesProps {
  appearance: ButtonAppearance;
  color: ButtonColor;
  size: ButtonSize;
  isDisabled: boolean;
  isLoading: boolean;
  isInline: boolean;
  iconBefore?: any;
  iconAfter?: any;
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
    iconBefore,
    iconAfter,
  } = buttonStyleProps;

  const { appearances, sizes, disabled, ...baseStyles } = getButtonVariables(
    theme,
  );

  const {
    color: textColor,
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
    focusColor:
      appearance === 'minimal' || appearance === 'outline'
        ? theme.colors.button.default
        : darken(buttonStyle.backgroundColor, 0.05),
    textStyle: {
      alignItems: 'center',
      color: isDisabled ? disabledButtonTextColor : textColor,
      display: 'flex',
      fontSize,
      fontWeight: '600',
      justifyContent: 'center',
      textAlign: 'center',
    },

    innerButtonWrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
    },

    buttonContentWrapperStyle: {
      paddingLeft: iconBefore ? 8 : 0,
      paddingRight: iconAfter ? 8 : 0,
    },
  };
};
