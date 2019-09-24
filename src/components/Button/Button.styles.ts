import { TextStyle, ViewStyle } from 'react-native';

import { ButtonColor, Theme } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
import { ButtonProps } from './Button';

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

export interface ButtonStyles {
  touchableStyle: ViewStyle;
  textStyle: TextStyle;
  innerButtonWrapperStyle: ViewStyle;
  buttonContentWrapperStyle: ViewStyle;
}

export type GetButtonStyles = (
  props: ButtonProps,
  theme: Theme,
) => Partial<ButtonStyles>;

export const getButtonStyles: GetButtonStyles = (props, theme) => {
  const {
    appearance = 'primary',
    color = 'default',
    iconAfter,
    iconBefore,
    isDisabled,
    isLoading,
    size = 'medium',
  } = props;
  const hasIconAfter = !!iconAfter;
  const hasIconBefore = !!iconBefore;

  const buttonAppearances = getButtonAppearances(theme);

  const {
    color: textColor,
    loadingBackgroundColor,
    ...touchableStyle
  } = buttonAppearances[appearance][color];
  const { borderRadius, height, paddingLeft, paddingRight } = isControlSize(
    size,
  )
    ? {
        borderRadius: theme.controlBorderRadius[size],
        height: theme.controlHeights[size],
        paddingLeft: theme.controlPaddings[size] * 2,
        paddingRight: theme.controlPaddings[size] * 2,
      }
    : {
        borderRadius: theme.controlBorderRadius.medium,
        height: size,
        paddingLeft: theme.controlPaddings.medium * 2,
        paddingRight: theme.controlPaddings.medium * 2,
      };

  const textSize = isControlSize(size)
    ? theme.textSizes[size]
    : theme.textSizes.medium;

  return {
    buttonContentWrapperStyle: {
      paddingLeft: hasIconBefore ? 8 : 0,
      paddingRight: hasIconAfter ? 8 : 0,
    },
    innerButtonWrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
    },
    textStyle: {
      alignItems: 'center',
      color: isDisabled ? theme.colors.text.muted : textColor,
      display: 'flex',
      fontWeight: '600',
      justifyContent: 'center',
      textAlign: 'center',
      ...textSize,
    },
    touchableStyle: {
      borderRadius,
      height,
      paddingLeft,
      paddingRight,
      ...touchableStyle,
      ...(isDisabled
        ? {
            backgroundColor: theme.colors.button.disabled,
          }
        : {
            ...(isLoading ? { backgroundColor: loadingBackgroundColor } : {}),
          }),
    },
  };
};
