import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial, Omit } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Button, ButtonProps } from '../Button';
import { GetTabStyles, getTabStyles, TabStyles } from './Tab.styles';

export interface TabProps
  extends Omit<Omit<ButtonProps, 'onPress'>, 'getStyles'> {
  index?: number;
  isActive?: boolean;
  shouldStretch?: boolean;
  getStyles?: ReplaceReturnType<GetTabStyles, DeepPartial<TabStyles>>;
  onPress?: (index: number) => void;
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
  const { containerStyle, buttonStyle, textStyle, focusColor } = mergeStyles(
    getTabStyles,
    getStyles,
    theme.components.getTabStyles,
  )({ isActive, shouldStretch }, theme);

  return (
    <View style={containerStyle}>
      <Button
        color={isActive ? 'primary' : 'default'}
        getStyles={() => ({ buttonStyle, focusColor, textStyle })}
        onPress={() => {
          if (index && onPress) onPress(index);
        }}
        {...buttonProps}
      />
    </View>
  );
};
