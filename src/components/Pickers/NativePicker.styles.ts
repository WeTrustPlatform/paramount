import { Platform, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export type NativePickerAppearanceStyles = ViewStyle & {
  borderColor: string;
  color: string;
};

export type BaseState = NativePickerAppearanceStyles;
export type DisabledState = Partial<NativePickerAppearanceStyles>;
export type InvalidState = Partial<NativePickerAppearanceStyles>;
export type FocusState = Partial<NativePickerAppearanceStyles>;

export type SizeStyles = ViewStyle & {
  borderRadius: number;
  fontSize: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
};

export interface NativePickerSizes {
  small: SizeStyles;
  medium: SizeStyles;
  large: SizeStyles;
}

export type NativePickerSize = keyof NativePickerSizes;

export interface NativePickerVariables {
  base: BaseState;
  disabled: DisabledState;
  focus: FocusState;
  invalid: InvalidState;
  placeholderTextColor: string;
  sizes: NativePickerSizes;
}

export const getNativePickerVariables = (
  theme: Theme,
): NativePickerVariables => {
  return {
    base: {
      borderColor: theme.colors.border.default,
      borderWidth: 1,
      color: theme.colors.text.default,
    },
    disabled: {
      backgroundColor: theme.colors.background.disabled,
    },
    focus: {},
    invalid: {
      borderColor: theme.colors.border.danger,
    },
    placeholderTextColor: theme.colors.text.muted,
    sizes: {
      small: {
        borderRadius: theme.controlBorderRadius.small,
        fontSize: theme.textSizes.small,
        height: theme.controlHeights.small,
        paddingLeft: theme.controlPaddings.small,
        paddingRight: 40,
      },

      medium: {
        borderRadius: theme.controlBorderRadius.medium,
        fontSize: theme.textSizes.medium,
        height: theme.controlHeights.medium,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: 40,
      },

      large: {
        borderRadius: theme.controlBorderRadius.large,
        fontSize: theme.textSizes.large,
        height: theme.controlHeights.large,
        paddingLeft: theme.controlPaddings.large,
        paddingRight: 40,
      },
    },
  };
};

export interface NativePickerStyles {
  containerStyle: ViewStyle;
  rightContainerStyle: ViewStyle;
  pickerStyle: ViewStyle;
  itemStyle: any;
}

export interface NativePickerStylesProps {
  size: NativePickerSize;
}
export type GetNativePickerStyles = (
  pickerStylesProps: NativePickerStylesProps,
  theme: Theme,
) => NativePickerStyles;

export const getNativePickerStyles: GetNativePickerStyles = (
  pickerStylesProps,
  theme,
) => {
  const pickerVariables = getNativePickerVariables(theme);
  const { base, sizes } = pickerVariables;
  const { size } = pickerStylesProps;

  const { fontSize, ...sizeStyles } = sizes[size];

  return {
    containerStyle: {
      backgroundColor: theme.colors.background.plain,
      position: 'relative',
    },
    itemStyle: {
      fontSize,
    },
    pickerStyle: {
      backgroundColor: 'transparent',
      ...base,
      ...sizeStyles,
      ...(Platform.OS === 'web' && {
        appearance: 'none',
      }),
    },
    rightContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 8,
      position: 'absolute',
      right: 0,
      zIndex: -1,
    },
  };
};
