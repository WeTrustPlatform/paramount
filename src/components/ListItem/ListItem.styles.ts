import { TextStyle, ViewStyle } from 'react-native';

import { ControlSize, Theme } from '../../theme/Theme';

export interface ListItemStyles {
  imageWrapperStyle: ViewStyle;
  wrapperStyle: ViewStyle;
  containerStyle: ViewStyle;
  leftWrapperStyle: ViewStyle;
  textWrapperStyle: ViewStyle;
  focusBackgroundColor: string;
  titleStyle: TextStyle;
  descriptionStyle: TextStyle;
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
      paddingLeft: 16,
      paddingRight: 8,
      ...(isDisabled
        ? { backgroundColor: theme.colors.background.greyDark }
        : {}),
    },
    descriptionStyle: {},
    focusBackgroundColor: theme.colors.background.greyLight,
    imageWrapperStyle: {
      marginRight: 8,
    },
    leftWrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    textWrapperStyle: {
      justifyContent: 'center',
    },
    titleStyle: {},
    wrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
};
