import { TextStyle, ViewStyle } from 'react-native';

import { ButtonColor, ControlSize, Theme } from '../../theme/Theme';

export interface ButtonColorProps {
  backgroundColor: string;
  color: string;
  borderWidth?: number;
  borderColor?: string;
  loadingBackgroundColor?: string;
}

export interface ButtonAppearances {
  minimal: { [size in ButtonColor]: ButtonColorProps };
  primary: { [size in ButtonColor]: ButtonColorProps };
  outline: { [size in ButtonColor]: ButtonColorProps };
}

export type ButtonAppearance = keyof ButtonAppearances;

export const getButtonAppearances = (theme: Theme): ButtonAppearances => {
  return {
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
  };
};

export interface ButtonStylesProps {
  appearance: ButtonAppearance;
  color: ButtonColor;
  size: ControlSize;
  isDisabled: boolean;
  isLoading: boolean;
  isInline: boolean;
  hasIconAfter?: boolean;
  hasIconBefore?: boolean;
}

export interface ButtonStyles {
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  innerButtonWrapperStyle: ViewStyle;
  buttonContentWrapperStyle: ViewStyle;
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
    hasIconAfter,
    hasIconBefore,
  } = buttonStyleProps;

  const buttonAppearances = getButtonAppearances(theme);

  const {
    color: textColor,
    loadingBackgroundColor,
    ...buttonStyle
  } = buttonAppearances[appearance][color];

  return {
    buttonStyle: {
      borderRadius: theme.controlBorderRadius[size],
      height: theme.controlHeights[size],
      paddingLeft: theme.controlPaddings[size] * 2,
      paddingRight: theme.controlPaddings[size] * 2,
      ...buttonStyle,
      ...(isDisabled
        ? {
            backgroundColor: theme.colors.button.disabled,
          }
        : {
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
    textStyle: {
      alignItems: 'center',
      color: isDisabled ? theme.colors.text.muted : textColor,
      display: 'flex',
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
      paddingLeft: hasIconBefore ? 8 : 0,
      paddingRight: hasIconAfter ? 8 : 0,
    },
  };
};
