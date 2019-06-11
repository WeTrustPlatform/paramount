import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { TabProps } from './Tab';
import { GetTabsStyles, getTabsStyles, TabsStyles } from './Tabs.styles';

export type TabsDistribution = 'scrollable' | 'fit';

export interface TabsProps {
  activeTabIndex?: number;
  children: Array<React.ReactElement<TabProps>>;
  getStyles?: ReplaceReturnType<GetTabsStyles, DeepPartial<TabsStyles>>;

  onChange: (index: number) => void;
}

export const Tabs = (props: TabsProps) => {
  const { children, activeTabIndex, onChange, getStyles } = props;
  const theme = useTheme();

  const { containerStyle } = mergeStyles(
    getTabsStyles,
    getStyles,
    theme.components.getTabsStyles,
  )({}, theme);

  const data = React.Children.map(children, (child, index) => {
    if (!child) return null;

    return {
      index,
      isActive: index === activeTabIndex,
      onPress: i => onChange(i),
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
