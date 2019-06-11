import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

export interface CounterStyles {
  containerStyle: ViewStyle;
  countStyle: ViewStyle;
  counterStyle: ViewStyle;
  disabledStyle: ViewStyle;
  textStyle: TextStyle;
}

export type GetCounterStyles = (props: {}, theme: Theme) => CounterStyles;

export const getCounterStyles: GetCounterStyles = (props, theme) => {
  return {
    containerStyle: {
      display: 'flex',
      flexDirection: 'row',
    },
    countStyle: {
      justifyContent: 'center',
    },
    counterStyle: {
      alignItems: 'center',
      borderColor: theme.colors.border.primary,
      borderRadius: 999,
      borderWidth: 1,
      display: 'flex',
      height: 40,
      justifyContent: 'center',
      width: 40,
    },
    disabledStyle: {
      borderColor: theme.colors.border.default,
    },
    textStyle: {},
  };
};
