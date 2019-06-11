import { TextStyle, ViewStyle } from 'react-native';

import { ControlSize, Theme } from '../../theme/ThemeInterface';

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
  size: ControlSize;
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
  return {
    containerStyle: {
      backgroundColor: theme.colors.background.content,
      borderBottomWidth: 1,
      borderColor: theme.colors.border.default,
      height: theme.controlHeights[size],
      justifyContent: 'center',
      paddingLeft: theme.controlPaddings[size],
      paddingRight: theme.controlPaddings[size],
      ...(isDisabled
        ? { backgroundColor: theme.colors.background.greyDark }
        : {}),
    },
    focusBackgroundColor: theme.colors.background.greyLight,
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
    wrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
};
