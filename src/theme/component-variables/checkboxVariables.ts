import { ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';

export type CheckboxAppearanceStyles = ViewStyle & {
  backgroundColor: string;
  borderColor: string;
};

export type BaseState = CheckboxAppearanceStyles;
export type DisabledState = Partial<CheckboxAppearanceStyles>;
export type FocusState = Partial<CheckboxAppearanceStyles>;
export type CheckedState = Partial<CheckboxAppearanceStyles>;

export interface CheckboxVariables {
  base: BaseState;
  disabled: DisabledState;
  checked: CheckedState;
  checkedFocus: CheckedState;
  uncheckedFocus: CheckedState;
}

export const getCheckboxVariables = (
  themeVariables: ThemeVariables,
): CheckboxVariables => {
  return {
    base: {
      backgroundColor: themeVariables.colors.background.plain,
      borderColor: themeVariables.colors.border.default,
      borderRadius: themeVariables.controlBorderRadius.small,
      borderWidth: 1,
      height: 32,
      width: 32,
    },
    checked: {
      backgroundColor: themeVariables.colors.background.primary.default,
      borderColor: themeVariables.colors.border.primary,
    },
    checkedFocus: {
      backgroundColor: themeVariables.colors.background.primary.focus,
    },
    disabled: {
      backgroundColor: themeVariables.colors.background.disabled,
      borderColor: themeVariables.colors.border.default,
    },
    uncheckedFocus: {
      backgroundColor: themeVariables.colors.background.tint1,
    },
  };
};
