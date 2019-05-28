import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial, Omit } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Button, ButtonProps } from '../Button';
import { ButtonStyles, GetButtonStyles } from '../Button/Button.styles';
import { Divider } from '../Divider';
import { getTabStyles, TabStyles } from './Tab.styles';

export interface TabProps extends Omit<ButtonProps, 'onPress'> {
  index: number;
  isActive?: boolean;
  getStyles?: ReplaceReturnType<
    GetButtonStyles,
    DeepPartial<ButtonStyles & TabStyles>
  >;
  onPress: (index: number) => void;
}

export const Tab = (props: TabProps) => {
  const { isActive = false, getStyles, index, onPress, ...buttonProps } = props;
  const theme = useTheme();
  const { containerStyle, dividerStyle, buttonStyle, textStyle } = mergeStyles(
    getTabStyles,
    getStyles,
  )(theme);

  return (
    <View style={containerStyle}>
      <Button
        color={isActive ? 'primary' : 'default'}
        appearance="minimal"
        getStyles={() => ({ buttonStyle, textStyle })}
        onPress={() => onPress(index)}
        {...buttonProps}
      />
      {isActive && (
        <Divider
          size={4}
          color={isActive ? 'primary' : 'default'}
          getStyles={() => ({ dividerStyle })}
        />
      )}
    </View>
  );
};
