import { ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

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

export const getCheckboxVariables = (
  themeVariables: ThemeVariables,
): CheckboxVariables => {
  return {
    base: {
      backgroundColor: themeVariables.colors.background.plain,
      borderColor: themeVariables.colors.border.default,
      borderWidth: 1,
      height: 32,
      width: 32,
    },
    checked: {
      backgroundColor: themeVariables.colors.background.primary.default,
      borderColor: 'transparent',
    },
    checkedFocus: {
      backgroundColor: themeVariables.colors.background.primary.focus,
    },
    disabled: {
      backgroundColor: themeVariables.colors.background.disabled,
      borderColor: themeVariables.colors.border.default,
    },
    shape: {
      circle: {
        borderRadius: 999,
      },
      square: {
        borderRadius: themeVariables.controlBorderRadius.small,
      },
    },
    uncheckedFocus: {
      backgroundColor: themeVariables.colors.background.tint1,
    },
  };
};
