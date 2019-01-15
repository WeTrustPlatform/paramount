import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';
import { getTextVariables } from '../Typography/Text.styles';

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

export const getSelectListVariables = (theme: Theme): SelectListVariables => {
  const textSizes = getTextVariables(theme);
  return {
    base: {
      backgroundColor: theme.colors.background.plain,
      borderBottomWidth: 1,
      borderColor: theme.colors.border.default,
      justifyContent: 'center',
    },
    disabled: {
      backgroundColor: theme.colors.background.disabled,
    },
    focusBackgroundColor: theme.colors.background.tint1,
    selected: {},
    sizes: {
      small: {
        fontSize: theme.textSizes.small,
        height: theme.controlHeights.small,
        paddingLeft: theme.controlPaddings.small,
        paddingRight: theme.controlPaddings.small,
      },

      medium: {
        fontSize: theme.textSizes.medium,
        height: theme.controlHeights.medium,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: theme.controlPaddings.medium,
      },

      large: {
        fontSize: theme.textSizes.large,
        height: theme.controlHeights.large,
        paddingLeft: theme.controlPaddings.large,
        paddingRight: theme.controlPaddings.large,
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

export interface SelectListStyles {
  wrapperStyle: ViewStyle;
  containerStyle: ViewStyle;
  focusBackgroundColor: string;
  textStyle: TextStyle;
}

export interface SelectListStylesProps {
  size: SelectListSize;
  isDisabled: boolean;
  isSelected: boolean;
}

export type GetSelectListStyles = (
  selectListStylesProps: SelectListStylesProps,
  theme: Theme,
) => SelectListStyles;

export const getSelectListStyles: GetSelectListStyles = (
  { size, isDisabled, isSelected },
  theme,
) => {
  const selectListVariables = getSelectListVariables(theme);
  const {
    base,
    disabled,
    selected,
    focusBackgroundColor,
    sizes,
    textSizes,
  } = selectListVariables;

  const { fontSize, ...sizeStyles } = sizes[size];

  return {
    containerStyle: {
      ...base,
      ...sizeStyles,
      ...(isSelected ? selected : {}),
      ...(isDisabled ? disabled : {}),
    },
    focusBackgroundColor,
    textStyle: textSizes[size],
    wrapperStyle: selectListVariables.wrapper,
  };
};
