import { TextStyle, ViewStyle } from 'react-native';

import { ButtonAppearance, ButtonColor, ButtonSize, IButtonVariables } from '../component-variables/buttonVariables';

export interface IButtonStyles {
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  focusColor: string;
}

export type GetButtonStyles = (
  appearance: ButtonAppearance,
  color: ButtonColor,
  size: ButtonSize,
  isDisabled: boolean,
  isLoading: boolean,
  isInline: boolean,
) => {
  buttonStyle: ViewStyle;
  focusColor: string;
  textStyle: TextStyle;
};

export const getButtonStyles = (
  buttonVariables: IButtonVariables,
): GetButtonStyles => (
  appearance: ButtonAppearance,
  color: ButtonColor,
  size: ButtonSize,
  isDisabled = false,
  isLoading = false,
  isInline = false,
): IButtonStyles => {
  const { appearances, sizes, disabled, ...baseStyles } = buttonVariables;

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
      // lineHeight: shapeStyles.height,
      textAlign: 'center',
    },
  };
};
