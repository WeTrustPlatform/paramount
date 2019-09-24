import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { ListItemProps } from './ListItem';

export interface ListItemStyles {
  imageWrapperStyle: ViewStyle;
  wrapperStyle: ViewStyle;
  touchableStyle: ViewStyle;
  leftWrapperStyle: ViewStyle;
  textWrapperStyle: ViewStyle;
  rightWrapperStyle: ViewStyle;
  titleStyle: TextStyle;
  descriptionStyle: TextStyle;
}

export type GetListItemStyles = (
  props: ListItemProps,
  theme: Theme,
) => Partial<ListItemStyles>;

export const getListItemStyles: GetListItemStyles = ({ isDisabled }, theme) => {
  return {
    descriptionStyle: {},
    imageWrapperStyle: {
      marginRight: 8,
    },
    leftWrapperStyle: {
      alignItems: 'center',
      flexBasis: '85%',
      flexDirection: 'row',
    },
    rightWrapperStyle: {
      position: 'absolute',
      right: 0,
      zIndex: 2,
    },
    textWrapperStyle: {
      flex: 1,
      justifyContent: 'center',
    },
    titleStyle: {},
    touchableStyle: {
      backgroundColor: isDisabled
        ? theme.colors.background.greyLight
        : theme.colors.background.content,
      height: 72,
      justifyContent: 'center',
    },
    wrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
};
