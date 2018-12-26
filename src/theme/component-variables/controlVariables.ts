import { ThemeVariables } from '../ThemeInterface';

export interface SizeStyles {
  height: number;
  paddingLeft: number;
  paddingRight: number;
}

export interface ControlSizes {
  small: SizeStyles;
  medium: SizeStyles;
  large: SizeStyles;
}

export type ControlSize = keyof ControlSizes;

export interface ControlVariables {
  sizes: ControlSizes;
}

export const getControlVariables = (
  themeVariables: ThemeVariables,
): ControlVariables => {
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
