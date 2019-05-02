import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';
import { TabsDistribution } from './Tabs';

export interface TabsStyles {
  containerStyle: ViewStyle;
  tabContainerStyle: ViewStyle;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  dividerStyle: ViewStyle;
}

export interface GetTabsStylesProps {
  distribution: TabsDistribution;
}

export type GetTabsStyles = (
  props: GetTabsStylesProps,
  theme: Theme,
) => TabsStyles;

export const getTabsStyles: GetTabsStyles = ({ distribution }, theme) => {
  return {
    buttonStyle: {},
    containerStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    dividerStyle: {},
    tabContainerStyle:
      distribution === 'fit'
        ? {
            flex: 1,
          }
        : {},
    textStyle: {},
  };
};
