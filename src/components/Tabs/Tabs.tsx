import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Button, ButtonProps } from '../Button';

export interface TabOption {
  title: string;
}

interface TabsBaseProps {
  /**
   * Current active tab index.
   */
  activeTab?: number;

  /**
   * Called when a Tab is pressed
   */
  onTabChange: (tab: number) => void;

  /**
   * `Tab` components
   */
  tabs?: TabOption[];
}

export interface TabsOverrides {
  Root: RootProps;
  Tab: TabProps;
}

export interface TabsProps
  extends WithOverrides<TabsBaseProps, TabsOverrides> {}

export const Tabs = (props: TabsProps) => {
  const { tabs = [], activeTab, onTabChange, overrides = {} } = props;

  const [Root, rootProps] = getOverrides(StyledRoot, props, overrides.Root);
  const [Tab, tabProps] = getOverrides(StyledTab, props, overrides.Tab);

  return (
    <Root {...rootProps}>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.title}
          index={index}
          isActive={index === activeTab}
          title={tab.title}
          onPress={() => onTabChange(index)}
          {...tabProps}
        />
      ))}
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
}

const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        {
          borderRadius: theme.controlBorderRadius.medium,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

export interface TabProps extends ButtonProps {
  index: number;
  isActive: boolean;
  title: string;
}

export const StyledTab = (props: TabProps) => {
  const { isActive = false, index, ...buttonProps } = props;
  const theme = useTheme();

  return (
    <Button
      color={isActive ? 'primary' : 'default'}
      overrides={{
        Touchable: {
          style: {
            backgroundColor: isActive ? 'white' : 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
        Title: {
          style: {
            color: isActive
              ? theme.colors.text.primary
              : theme.colors.text.muted,
          },
        },
      }}
      {...buttonProps}
    />
  );
};
