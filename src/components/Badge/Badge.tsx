import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { ContainerShape, ControlSize, FillColor } from '../../theme/Theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import { BadgeStyles, GetBadgeStyles, getBadgeStyles } from './Badge.styles';

export interface BadgeProps {
  /** Title of the badge */
  title?: string;

  /**
   * Color of the badge
   * @default "neutral"
   */
  color?: FillColor;

  /**
   * Size of the badge
   * @default "medium"
   */
  size?: ControlSize;

  /**
   * Shape of the container
   * @default "rounded"
   */
  shape?: ContainerShape;

  /**
   * When true, display in solid mode
   * @default false
   */
  isSolid?: boolean;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetBadgeStyles, DeepPartial<BadgeStyles>>;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export const Badge = (props: BadgeProps) => {
  const {
    color = 'neutral',
    getStyles,
    isSolid = false,
    shape = 'rounded',
    size = 'medium',
    title,
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
      <Text weight="bold" size={size} getStyles={() => ({ textStyle })}>
        {title}
      </Text>
    </View>
  );
};
