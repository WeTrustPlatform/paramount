import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface TabStyles {
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  focusColor: string;
}

export interface GetTabStyleProps {
  shouldFit: boolean;
  isActive: boolean;
}

export type GetTabStyles = (props: GetTabStyleProps, theme: Theme) => TabStyles;

export const getTabStyles: GetTabStyles = ({ shouldFit, isActive }, theme) => {
  return {
    buttonStyle: {
      backgroundColor: isActive ? 'white' : 'transparent',
      ...(shouldFit
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
