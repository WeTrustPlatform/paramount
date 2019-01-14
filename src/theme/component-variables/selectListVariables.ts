import { TextStyle, ViewStyle } from 'react-native';

import { ThemeVariables } from '../ThemeInterface';
import { getTextVariables } from './textVariables';

export type SelectListAppearanceStyles = ViewStyle & {
  backgroundColor: string;
  borderColor: string;
};

export type BaseState = SelectListAppearanceStyles;
export type DisabledState = Partial<SelectListAppearanceStyles>;
export type FocusState = Partial<SelectListAppearanceStyles>;
export type SelectedState = Partial<SelectListAppearanceStyles>;

export type SizeStyles = ViewStyle & {
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface SelectListSizes {
  small: SizeStyles;
  medium: SizeStyles;
  large: SizeStyles;
}

export interface TextSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}

export type SelectListSize = keyof SelectListSizes;

export interface SelectListVariables {
  wrapper: ViewStyle;
  base: BaseState;
  disabled: DisabledState;
  selected: SelectedState;
  focusBackgroundColor: string;
  sizes: SelectListSizes;
  textSizes: TextSizes;
}

export const getSelectListVariables = (
  themeVariables: ThemeVariables,
): SelectListVariables => {
  const textSizes = getTextVariables(themeVariables);
  return {
    base: {
      backgroundColor: themeVariables.colors.background.plain,
      borderBottomWidth: 1,
      borderColor: themeVariables.colors.border.default,
      justifyContent: 'center',
    },
    disabled: {
      backgroundColor: themeVariables.colors.background.disabled,
    },
    focusBackgroundColor: themeVariables.colors.background.tint1,
    selected: {},
    sizes: {
      small: {
        fontSize: themeVariables.textSizes.small,
        height: themeVariables.controlHeights.small,
        paddingLeft: themeVariables.controlPaddings.small,
        paddingRight: themeVariables.controlPaddings.small,
      },

      medium: {
        fontSize: themeVariables.textSizes.medium,
        height: themeVariables.controlHeights.medium,
        paddingLeft: themeVariables.controlPaddings.medium,
        paddingRight: themeVariables.controlPaddings.medium,
      },

      large: {
        fontSize: themeVariables.textSizes.large,
        height: themeVariables.controlHeights.large,
        paddingLeft: themeVariables.controlPaddings.large,
        paddingRight: themeVariables.controlPaddings.large,
      },
    },
    textSizes: textSizes.size,
    wrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
};
