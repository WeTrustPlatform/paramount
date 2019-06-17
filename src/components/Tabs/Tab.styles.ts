import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

export interface TabStyles {
  containerStyle: ViewStyle;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  focusColor: string;
}

export interface GetTabStyleProps {
  shouldStretch: boolean;
  isActive: boolean;
}

export type GetTabStyles = (props: GetTabStyleProps, theme: Theme) => TabStyles;

export const getTabStyles: GetTabStyles = (
  { shouldStretch, isActive },
  theme,
) => {
  return {
    buttonStyle: {
      backgroundColor: isActive ? 'white' : 'transparent',
      paddingLeft: 0,
      paddingRight: 0,
    },
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
  };
};
