import { ViewStyle } from 'react-native';

import { ControlSize, Theme } from '../../theme/Theme';
import { CheckboxShape } from './Checkbox';

export interface CheckboxStylesProps {
  isChecked: boolean;
  isDisabled: boolean;
  shape: CheckboxShape;
  size: ControlSize;
}

export interface CheckboxStyles {
  touchableStyle: ViewStyle;
  checkboxStyle: ViewStyle;
  checkColor: string;
  checkboxFocusBackgroundColor: string;
}

export type GetCheckboxStyles = (
  checkboxStylesProps: CheckboxStylesProps,
  theme: Theme,
) => CheckboxStyles;

export const getCheckboxStyles: GetCheckboxStyles = (
  { isChecked, isDisabled, shape, size },
  theme,
) => {
  const sizeValue = theme.controlHeights[size] - 16;

  return {
    checkColor: theme.colors.text.white,
    checkboxFocusBackgroundColor: isChecked
      ? theme.colors.background.primaryDark
      : theme.colors.background.greyLight,

    checkboxStyle: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.content,
      borderColor: theme.colors.border.default,
      borderWidth: 1,
      height: sizeValue,
      justifyContent: 'center',
      width: sizeValue,
      ...(isChecked
        ? {
            backgroundColor: theme.colors.background.primaryDefault,
            borderColor: 'transparent',
          }
        : {}),
      ...(isDisabled
        ? {
            backgroundColor: theme.colors.background.greyDark,
            borderColor: theme.colors.border.default,
          }
        : {}),
      ...{
        circle: {
          borderRadius: 999,
        },
        square: {
          borderRadius: theme.controlBorderRadius.small,
        },
      }[shape],
    },

    touchableStyle: {},
  };
};
