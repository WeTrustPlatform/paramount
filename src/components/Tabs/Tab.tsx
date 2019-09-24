import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Button, ButtonProps } from '../Button';
import { GetTabStyles, getTabStyles } from './Tab.styles';

export interface TabProps
  extends Omit<Omit<ButtonProps, 'onPress'>, 'getStyles'> {
  /**
   * Index of the tab.
   */
  index?: number;

  /**
   * Called when tab is pressed.
   */
  onPress?: (index?: number) => void;

  /**
   * When true, the tab would be highlighted as active.
   * @default false
   */
  isActive?: boolean;

  /**
   * When true, the tab will fill empty spaces
   * @default true
   */
  shouldStretch?: boolean;

  /**
   * Callback to get element styles.
   */
  getStyles?: GetTabStyles;
}

export const Tab = (props: TabProps) => {
  const {
    isActive = false,
    getStyles,
    index,
    onPress,
    shouldStretch = true,
    ...buttonProps
  } = props;
  const theme = useTheme();
  const { containerStyle, touchableStyle, textStyle } = mergeStyles(
    getTabStyles,
    getStyles,
    theme.components.getTabStyles,
  )(props, theme);

  return (
    <View style={containerStyle}>
      <Button
        color={isActive ? 'primary' : 'default'}
        getStyles={() => ({ touchableStyle, textStyle })}
        onPress={() => {
          if ((index === 0 || index) && onPress) onPress(index);
          else if (onPress) onPress();
        }}
        {...buttonProps}
      />
    </View>
  );
};
