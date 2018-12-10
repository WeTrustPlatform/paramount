import { TextStyle, ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';
import { getTextVariables } from './textVariables';

export type ISelectListAppearanceStyles = ViewStyle & {
  backgroundColor: string;
  borderColor: string;
};

export type IBaseState = ISelectListAppearanceStyles;
export type IDisabledState = Partial<ISelectListAppearanceStyles>;
export type IFocusState = Partial<ISelectListAppearanceStyles>;
export type ISelectedState = Partial<ISelectListAppearanceStyles>;

export type ISizeStyles = ViewStyle & {
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface ISelectListSizes {
  small: ISizeStyles;
  medium: ISizeStyles;
  large: ISizeStyles;
}

export interface ITextSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}

export type SelectListSize = keyof ISelectListSizes;

export interface ISelectListVariables {
  base: IBaseState;
  disabled: IDisabledState;
  selected: ISelectedState;
  focusBackgroundColor: string;
  sizes: ISelectListSizes;
  textSizes: ITextSizes;
}

export const getSelectListVariables = (
  themeVariables: IThemeVariables,
): ISelectListVariables => {
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
  };
};
