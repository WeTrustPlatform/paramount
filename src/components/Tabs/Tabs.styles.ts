import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { TabsProps } from './Tabs';

export interface TabsStyles {
  containerStyle: ViewStyle;
}

export type GetTabsStyles = (
  props: TabsProps,
  theme: Theme,
) => Partial<TabsStyles>;

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
