import * as React from 'react';
import { FlatList, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

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
  distribution?: TabsDistribution;

  onPress: (index: number) => void;
  onSetActiveTabIndex?: (index: number) => void;
}

export interface WrapperProps {
  children: React.ReactNode;
}

export const Tabs = (props: TabsProps) => {
  const {
    children,
    activeTabIndex,
    defaultActiveTabIndex = 0,
    onPress,
    onSetActiveTabIndex,
    getStyles,
    distribution = 'fit',
  } = props;
  const [localActiveTabIndex, setLocalActiveTabIndex] = React.useState(
    defaultActiveTabIndex,
  );
  const theme = useTheme();
  const isControlled = !!(activeTabIndex || onPress);
  const {
    containerStyle,
    tabContainerStyle,
    textStyle,
    buttonStyle,
    dividerStyle,
  } = mergeStyles(getTabsStyles, getStyles)({ distribution }, theme);

  const data = React.Children.map(children, (child, index) => {
    if (!child) return null;

    const tabCommonProps = {
      getStyles: () => ({
        buttonStyle,
        containerStyle: tabContainerStyle,
        dividerStyle,
        textStyle,
      }),
    };

    return isControlled
      ? {
          ...tabCommonProps,
          isActive: index === activeTabIndex,
          onPress: () => onPress(index),
        }
      : {
          ...tabCommonProps,
          isActive: index === localActiveTabIndex,
          onPress: () => {
            setLocalActiveTabIndex(index);
            if (onSetActiveTabIndex) onSetActiveTabIndex(index);
          },
        };
  }) as TabProps[];

  const tabs = React.Children.toArray(children);

  if (distribution === 'fit') {
    return (
      <View style={containerStyle}>
        {data.map((item, index) => React.cloneElement(tabs[index], item))}
      </View>
    );
  }

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item, index }) => React.cloneElement(tabs[index], item)}
    />
  );
};
