import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../theme';
import { ContainerShape, ControlSize, FillColor } from '../../theme/Theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import { GetBadgeStyles, getBadgeStyles } from './Badge.styles';

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
  size?: ControlSize | number;

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
  getStyles?: GetBadgeStyles;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export const Badge = (props: BadgeProps) => {
  const { getStyles, title, testID } = props;

  const theme = useTheme();

  const { containerStyle, textStyle } = mergeStyles(
    getBadgeStyles,
    getStyles,
    theme.components.getBadgeStyles,
  )(props, theme);

  return (
    <View style={containerStyle} testID={testID}>
      <Text weight="bold" getStyles={() => ({ textStyle })}>
        {title}
      </Text>
    </View>
  );
};
