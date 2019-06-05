import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

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
  focusBackgroundColor: string;
  sizes: ListItemSizes;
}

export const getListItemVariables = (theme: Theme): ListItemVariables => {
  return {
    base: {
      backgroundColor: theme.colors.background.content,
      borderBottomWidth: 1,
      borderColor: theme.colors.border.default,
      justifyContent: 'center',
    },
    disabled: {
      backgroundColor: theme.colors.background.greyDark,
    },
    focusBackgroundColor: theme.colors.background.greyLight,
    sizes: {
      small: {
        fontSize: theme.textSizes.small.fontSize || 14,
        height: theme.controlHeights.small,
        paddingLeft: theme.controlPaddings.small,
        paddingRight: theme.controlPaddings.small,
      },

      medium: {
        fontSize: theme.textSizes.medium.fontSize || 16,
        height: theme.controlHeights.medium,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: theme.controlPaddings.medium,
      },

      large: {
        fontSize: theme.textSizes.large.fontSize || 18,
        height: theme.controlHeights.large,
        paddingLeft: theme.controlPaddings.large,
        paddingRight: theme.controlPaddings.large,
      },
    },
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
}

export type GetListItemStyles = (
  selectListStylesProps: ListItemStylesProps,
  theme: Theme,
) => ListItemStyles;

export const getListItemStyles: GetListItemStyles = (
  { size, isDisabled },
  theme,
) => {
  const selectListVariables = getListItemVariables(theme);
  const { base, disabled, focusBackgroundColor, sizes } = selectListVariables;

  const { fontSize, ...sizeStyles } = sizes[size];

  return {
    containerStyle: {
      ...base,
      ...sizeStyles,
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
    textStyle: theme.textSizes[size],
    textWrapperStyle: {
      height: '100%',
    },
    wrapperStyle: selectListVariables.wrapper,
  };
};
