import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Measurements } from '../../hooks';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { TabProps } from './Tab';
import { GetTabsStyles, getTabsStyles, TabsStyles } from './Tabs.styles';

export type TabsDistribution = 'scrollable' | 'fit';

export interface TabsProps {
  activeTabIndex?: number;
  children: Array<React.ReactElement<TabProps>>;
  defaultActiveTabIndex?: number;
  getStyles?: ReplaceReturnType<GetTabsStyles, DeepPartial<TabsStyles>>;
  shouldFit?: boolean;

  onPress: (index: number) => void;
}

export interface WrapperProps {
  children: React.ReactNode;
}

export interface ActiveBarProps {
  index: number;
  measurements: Measurements;
}

export const Tabs = (props: TabsProps) => {
  const {
    children,
    activeTabIndex,
    defaultActiveTabIndex = 0,
    onPress,
    getStyles,
    shouldFit = false,
  } = props;
  const [localActiveTabIndex, setLocalActiveTabIndex] = React.useState(
    defaultActiveTabIndex,
  );
  const theme = useTheme();
  const isControlled = !!(activeTabIndex || onPress);

  const { containerStyle } = mergeStyles(getTabsStyles, getStyles)({}, theme);

  const data = React.Children.map(children, (child, index) => {
    if (!child) return null;

    return isControlled
      ? {
          index,
          isActive: index === activeTabIndex,
          onPress: i => onPress(i),
          shouldFit,
        }
      : {
          index,
          isActive: index === localActiveTabIndex,
          onPress: i => setLocalActiveTabIndex(i),
          shouldFit,
        };
  }) as TabProps[];

  const tabs = React.Children.toArray(children);

  return (
    <View style={containerStyle}>
      {data.map((tabProps, index) => React.cloneElement(tabs[index], tabProps))}
    </View>
  );
};
