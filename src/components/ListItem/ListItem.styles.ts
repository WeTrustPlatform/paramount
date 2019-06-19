import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { ListItemProps } from './ListItem';

export interface ListItemStyles {
  imageWrapperStyle: ViewStyle;
  wrapperStyle: ViewStyle;
  touchableStyle: ViewStyle;
  leftWrapperStyle: ViewStyle;
  textWrapperStyle: ViewStyle;
  titleStyle: TextStyle;
  descriptionStyle: TextStyle;
}

export type GetListItemStyles = (
  props: ListItemProps,
  theme: Theme,
) => ListItemStyles;

export const getListItemStyles: GetListItemStyles = (
  { size = 'medium', isDisabled },
  theme,
) => {
  return {
    descriptionStyle: {},
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
    touchableStyle: {
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
    wrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
};
