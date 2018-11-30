import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export type ICheckboxAppearanceStyles = ViewStyle & {
  backgroundColor: string;
  borderColor: string;
};

export type IBaseState = ICheckboxAppearanceStyles;
export type IDisabledState = Partial<ICheckboxAppearanceStyles>;
export type IFocusState = Partial<ICheckboxAppearanceStyles>;
export type ICheckedState = Partial<ICheckboxAppearanceStyles>;

export interface ICheckboxVariables {
  base: IBaseState;
  disabled: IDisabledState;
  checked: ICheckedState;
  checkedFocus: ICheckedState;
  uncheckedFocus: ICheckedState;
}

export const getCheckboxVariables = (
  themeVariables: IThemeVariables,
): ICheckboxVariables => {
  return {
    base: {
      backgroundColor: themeVariables.colors.background.plain,
      borderColor: themeVariables.colors.border.default,
      borderRadius: themeVariables.controlBorderRadius.small,
      borderWidth: 1,
      height: 24,
      width: 24,
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
