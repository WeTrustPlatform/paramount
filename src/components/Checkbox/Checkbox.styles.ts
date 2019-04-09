import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';
import { CheckboxShape } from './Checkbox';

export interface ShapeStyle {
  circle: ViewStyle;
  square: ViewStyle;
}

export interface CheckboxVariables {
  base: ViewStyle;
  disabled: ViewStyle;
  checked: ViewStyle;
  checkedFocus: ViewStyle;
  uncheckedFocus: ViewStyle;
  shape: ShapeStyle;
}

export const getCheckboxVariables = (theme: Theme): CheckboxVariables => {
  return {
    base: {
      backgroundColor: theme.colors.background.white,
      borderColor: theme.colors.border.default,
      borderWidth: 1,
      height: 32,
      width: 32,
    },
    checked: {
      backgroundColor: theme.colors.background.primaryDefault,
      borderColor: 'transparent',
    },
    checkedFocus: {
      backgroundColor: theme.colors.background.primaryDark,
    },
    disabled: {
      backgroundColor: theme.colors.background.greyDark,
      borderColor: theme.colors.border.default,
    },
    shape: {
      circle: {
        borderRadius: 999,
      },
      square: {
        borderRadius: theme.controlBorderRadius.small,
      },
    },
    uncheckedFocus: {
      backgroundColor: theme.colors.background.greyLight,
    },
  };
};

export interface CheckboxStylesProps {
  isChecked: boolean;
  isDisabled: boolean;
  shape: CheckboxShape;
}

export interface CheckboxStyles {
  checkboxStyle: ViewStyle;
  checkboxFocusBackgroundColor?: string;
}

export type GetCheckboxStyles = (
  checkboxStylesProps: CheckboxStylesProps,
  theme: Theme,
) => CheckboxStyles;

export const getCheckboxStyles: GetCheckboxStyles = (
  { isChecked, isDisabled, shape },
  theme,
) => {
  const checkboxVariables = getCheckboxVariables(theme);

  return {
    checkboxFocusBackgroundColor: isChecked
      ? checkboxVariables.checkedFocus.backgroundColor
      : checkboxVariables.uncheckedFocus.backgroundColor,
    checkboxStyle: {
      ...checkboxVariables.base,
      ...(isChecked ? checkboxVariables.checked : {}),
      ...(isDisabled ? checkboxVariables.disabled : {}),
      ...checkboxVariables.shape[shape],
    },
  };
};
