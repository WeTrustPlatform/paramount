import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

export interface TabsStyles {
  containerStyle: ViewStyle;
}
export type GetTabsStyles = (props: {}, theme: Theme) => TabsStyles;

export const getTabsStyles: GetTabsStyles = (props, theme) => {
  return {
    containerStyle: {
      borderRadius: theme.controlBorderRadius.medium,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  };
};
