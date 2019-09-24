import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { TabProps } from './Tab';
import { GetTabsStyles, getTabsStyles } from './Tabs.styles';

export type TabsDistribution = 'scrollable' | 'fit';

export interface TabsProps {
  /**
   * Current active tab index.
   */
  activeTabIndex?: number;

  /**
   * Called when a Tab is pressed
   */
  onTabPress: (index?: number) => void;

  /**
   * `Tab` components
   */
  children: Array<React.ReactElement<TabProps>> | React.ReactElement<TabProps>;

  /** Callback to get element styles. */
  getStyles?: GetTabsStyles;
}

export const Tabs = (props: TabsProps) => {
  const { children, activeTabIndex, onTabPress, getStyles } = props;
  const theme = useTheme();

  const { containerStyle } = mergeStyles(
    getTabsStyles,
    getStyles,
    theme.components.getTabsStyles,
  )(props, theme);

  const data = React.Children.map(children, (child, index) => {
    if (!child) return null;

    return {
      index,
      isActive: index === activeTabIndex,
      onPress: i => onTabPress(i),
      ...child.props,
    };
  }) as TabProps[];

  const tabs = React.Children.toArray(children);

  return (
    <View style={containerStyle}>
      {data.map((tabProps, index) => React.cloneElement(tabs[index], tabProps))}
    </View>
  );
};
