import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { ContainerShape, ControlSize, FillColor } from '../../theme/Theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import { BadgeStyles, GetBadgeStyles, getBadgeStyles } from './Badge.styles';

export interface BadgeProps {
  children: React.ReactNode;
  color?: FillColor;
  size?: ControlSize;
  shape?: ContainerShape;
  isSolid?: boolean;
  getStyles?: ReplaceReturnType<GetBadgeStyles, DeepPartial<BadgeStyles>>;
  testID?: string;
}

export const Badge = (props: BadgeProps) => {
  const {
    children,
    color = 'neutral',
    getStyles,
    isSolid = false,
    shape = 'rounded',
    size = 'medium',
    testID,
  } = props;

  const theme = useTheme();

  const { containerStyle, textStyle } = mergeStyles(
    getBadgeStyles,
    getStyles,
    theme.components.getBadgeStyles,
  )({ size, color, isSolid, shape }, theme);

  return (
    <View style={containerStyle} testID={testID}>
      <Text
        weight="bold"
        size={size}
        getStyles={() => ({
          textStyle,
        })}
      >
        {children}
      </Text>
    </View>
  );
};
