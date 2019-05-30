import * as React from 'react';
import { FlatList, View } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';
import { DeepPartial } from 'ts-essentials';

import { springDefaultConfig } from '../../constants/Animation';
import { initialMeasurements, Measurements } from '../../hooks';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Box } from '../Box';
import { TabProps } from './Tab';
import { GetTabsStyles, getTabsStyles, TabsStyles } from './Tabs.styles';

export type TabsDistribution = 'scrollable' | 'fit';

const AnimatedView = animated(View);

export interface TabsProps {
  /** The indicator of active tab. Currently works only when distribution="fit" */
  ActiveBar?: React.ComponentType<ActiveBarProps>;
  activeTabIndex?: number;
  children: Array<React.ReactElement<TabProps>>;
  defaultActiveTabIndex?: number;
  getStyles?: ReplaceReturnType<GetTabsStyles, DeepPartial<TabsStyles>>;
  distribution?: TabsDistribution;

  onPress: (index: number) => void;
}

export interface WrapperProps {
  children: React.ReactNode;
}

export interface ActiveBarProps {
  index: number;
  measurements: Measurements;
}

const DefaultActiveBar = (props: ActiveBarProps) => {
  const { index, measurements } = props;
  const theme = useTheme();

  const { x, width } = useSpring({
    config: springDefaultConfig,

    width: measurements.width,
    x: index * measurements.width,
  });

  return (
    <AnimatedView
      // @ts-ignore
      style={{
        backgroundColor: theme.colors.background.primaryDefault,
        height: 3,
        left: x,
        position: 'absolute',
        top: measurements.height,
        width,
      }}
    />
  );
};

export const Tabs = (props: TabsProps) => {
  const {
    ActiveBar = DefaultActiveBar,
    children,
    activeTabIndex,
    defaultActiveTabIndex = 0,
    onPress,
    getStyles,
    distribution = 'fit',
  } = props;
  const [localActiveTabIndex, setLocalActiveTabIndex] = React.useState(
    defaultActiveTabIndex,
  );
  const theme = useTheme();
  const isControlled = !!(activeTabIndex || onPress);
  const listRef = React.useRef<FlatList<TabProps>>(null);
  const [activeBarProps, setActiveBarProps] = React.useState({
    index: (isControlled ? activeTabIndex : localActiveTabIndex) || -1,
    measurements: initialMeasurements,
  });

  React.useEffect(() => {
    if (listRef.current && distribution === 'scrollable') {
      if (isControlled && activeTabIndex) {
        listRef.current.scrollToIndex({
          animated: true,
          index: Math.max(activeTabIndex - 2, 0),
        });
      } else if (localActiveTabIndex) {
        listRef.current.scrollToIndex({
          animated: true,
          index: Math.max(localActiveTabIndex - 2, 0),
        });
      }
    }
  });

  const {
    containerStyle,
    tabContainerStyle,
    textStyle,
    buttonStyle,
    dividerStyle,
  } = mergeStyles(getTabsStyles, getStyles)({ distribution }, theme);

  const data = React.Children.map(children, (child, index) => {
    if (!child) return null;

    const tabCommonProps: Partial<TabProps> = {
      getStyles: () => ({
        buttonStyle,
        containerStyle: tabContainerStyle,
        dividerStyle,
        textStyle,
      }),
      index,
      onActive: (i, measurements) => {
        setActiveBarProps({ index, measurements });
      },
    };

    return isControlled
      ? {
          ...tabCommonProps,
          isActive: index === activeTabIndex,
          onPress: i => onPress(i),
        }
      : {
          ...tabCommonProps,
          isActive: index === localActiveTabIndex,
          onPress: i => setLocalActiveTabIndex(i),
        };
  }) as TabProps[];

  const tabs = React.Children.toArray(children);

  if (distribution === 'fit') {
    return (
      <View style={containerStyle}>
        {data.map((tabProps, index) =>
          React.cloneElement(tabs[index], tabProps),
        )}
        <ActiveBar {...activeBarProps} />
      </View>
    );
  }

  return (
    <>
      <FlatList
        ref={listRef}
        horizontal
        keyExtractor={item => `${item.index}`}
        data={data}
        renderItem={({ item, index }) => React.cloneElement(tabs[index], item)}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => <Box width="100%" testID="zxcv" />}
      />
    </>
  );
};
