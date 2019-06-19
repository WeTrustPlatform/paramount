import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { TabProps } from './Tab';

export interface TabStyles {
  containerStyle: ViewStyle;
  touchableStyle: ViewStyle;
  textStyle: TextStyle;
  focusColor: string;
}

export type GetTabStyles = (props: TabProps, theme: Theme) => TabStyles;

export const getTabStyles: GetTabStyles = (
  { shouldStretch, isActive },
  theme,
) => {
  return {
    containerStyle: {
      backgroundColor: theme.colors.background.greyDefault,
      padding: 2,
      ...(shouldStretch
        ? {
            flex: 1,
          }
        : {}),
    },
    focusColor: theme.colors.background.greyLight,
    textStyle: {
      color: isActive ? theme.colors.text.primary : theme.colors.text.muted,
    },
    touchableStyle: {
      backgroundColor: isActive ? 'white' : 'transparent',
      paddingLeft: 0,
      paddingRight: 0,
    },
  };
};
