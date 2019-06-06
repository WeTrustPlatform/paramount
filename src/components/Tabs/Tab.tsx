import * as React from 'react';
import { DeepPartial, Omit } from 'ts-essentials';

import { Measurements } from '../../hooks';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Button, ButtonProps } from '../Button';
import { GetTabStyles, getTabStyles, TabStyles } from './Tab.styles';

export interface TabProps
  extends Omit<Omit<ButtonProps, 'onPress'>, 'getStyles'> {
  index: number;
  isActive?: boolean;
  shouldFit?: boolean;
  getStyles?: ReplaceReturnType<GetTabStyles, DeepPartial<TabStyles>>;
  onPress: (index: number) => void;
  onActive?: (index: number, measurements: Measurements) => void;
}

export const Tab = (props: TabProps) => {
  const {
    isActive = false,
    getStyles,
    index,
    onPress,
    onActive = () => {
      return;
    },
    shouldFit = true,
    ...buttonProps
  } = props;
  const theme = useTheme();
  const { buttonStyle, textStyle, focusColor } = mergeStyles(
    getTabStyles,
    getStyles,
  )({ isActive, shouldFit }, theme);

  return (
    <Button
      color={isActive ? 'primary' : 'default'}
      getStyles={() => ({ buttonStyle, focusColor, textStyle })}
      onPress={() => onPress(index)}
      {...buttonProps}
    />
  );
};
