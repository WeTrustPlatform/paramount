import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface TabStyles {
  containerStyle: ViewStyle;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  dividerStyle: ViewStyle;
}

export type GetTabStyles = (props: {}, theme: Theme) => TabStyles;

export const getTabStyles: GetTabStyles = (props, theme) => {
  return {
    buttonStyle: {
      borderRadius: 0,
    },
    containerStyle: {},
    dividerStyle: {
      borderRadius: 0,
      bottom: 0,
      position: 'absolute',
    },
    textStyle: {},
  };
};
