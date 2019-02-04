import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';
import { getTextVariables } from '../Typography/Text.styles';

export type SizeStyles = ViewStyle & {
  fontSize: number;
};

export interface ListItemSizes {
  small: SizeStyles;
  medium: SizeStyles;
  large: SizeStyles;
}

export interface TextSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}

export type ListItemSize = keyof ListItemSizes;

export interface ListItemVariables {
  wrapper: ViewStyle;
  base: ViewStyle;
  disabled: ViewStyle;
  selected: ViewStyle;
  focusBackgroundColor: string;
  sizes: ListItemSizes;
  textSizes: TextSizes;
}

export const getListItemVariables = (theme: Theme): ListItemVariables => {
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

export interface ListItemStyles {
  imageWrapperStyle: ViewStyle;
  wrapperStyle: ViewStyle;
  containerStyle: ViewStyle;
  leftWrapperStyle: ViewStyle;
  textWrapperStyle: ViewStyle;
  focusBackgroundColor: string;
  textStyle: TextStyle;
}

export interface ListItemStylesProps {
  size: ListItemSize;
  isDisabled: boolean;
  isSelected: boolean;
}

export type GetListItemStyles = (
  selectListStylesProps: ListItemStylesProps,
  theme: Theme,
) => ListItemStyles;

export const getListItemStyles: GetListItemStyles = (
  { size, isDisabled, isSelected },
  theme,
) => {
  const selectListVariables = getListItemVariables(theme);
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
    imageWrapperStyle: {
      marginRight: 8,
    },
    leftWrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    textStyle: textSizes[size],
    textWrapperStyle: {
      height: '100%',
    },
    wrapperStyle: selectListVariables.wrapper,
  };
};
