import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Button, ButtonProps } from '../Button';
import { ButtonStyles, GetButtonStyles } from '../Button/Button.styles';
import { Divider } from '../Divider';
import { getTabStyles, TabStyles } from './Tab.styles';

export interface TabProps extends ButtonProps {
  isActive?: boolean;
  getStyles?: ReplaceReturnType<
    GetButtonStyles,
    DeepPartial<ButtonStyles & TabStyles>
  >;
}

export const Tab = (props: TabProps) => {
  const { isActive = false, getStyles, ...buttonProps } = props;
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
