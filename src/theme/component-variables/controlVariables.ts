import { IThemeVariables } from '../ThemeInterface';

export interface ISizeStyles {
  height: number;
  paddingLeft: number;
  paddingRight: number;
}

export interface IControlSizes {
  small: ISizeStyles;
  medium: ISizeStyles;
  large: ISizeStyles;
}

export type ControlSize = keyof IControlSizes;

export interface IControlVariables {
  sizes: IControlSizes;
}

export const getControlVariables = (
  themeVariables: IThemeVariables,
): IControlVariables => {
  return {
    sizes: {
      small: {
        height: themeVariables.controlHeights.small,
        paddingLeft: themeVariables.controlPaddings.small,
        paddingRight: themeVariables.controlPaddings.small,
      },

      medium: {
        height: themeVariables.controlHeights.medium,
        paddingLeft: themeVariables.controlPaddings.medium,
        paddingRight: themeVariables.controlPaddings.medium,
      },

      large: {
        height: themeVariables.controlHeights.large,
        paddingLeft: themeVariables.controlPaddings.large,
        paddingRight: themeVariables.controlPaddings.large,
      },
    },
  };
};
