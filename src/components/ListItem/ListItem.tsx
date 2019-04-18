import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { AvatarProps } from '../Avatar';
import { Text } from '../Typography';
import {
  GetListItemStyles,
  getListItemStyles,
  ListItemSize,
  ListItemStyles,
} from './ListItem.styles';

export interface ListItemProps extends AccessibilityProps {
  size?: ListItemSize;
  isDisabled?: boolean;
  label: string;
  description?: string;
  avatarProps?: AvatarProps;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  getStyles?: ReplaceReturnType<GetListItemStyles, DeepPartial<ListItemStyles>>;
  testID?: string;
}

export const ListItem = (props: ListItemProps) => {
  const {
    getStyles,
    isDisabled = false,
    label,
    description,
    size = 'medium',
    onPress,
    rightIcon = null,
    leftIcon,
    testID,
    ...accessibilityProps
  } = props;
  const theme = useTheme();

  const {
    imageWrapperStyle,
    leftWrapperStyle,
    textWrapperStyle,
    containerStyle,
    textStyle,
    focusBackgroundColor,
    wrapperStyle,
  } = mergeStyles(getListItemStyles, getStyles)({ size, isDisabled }, theme);

  return (
    <TouchableHighlight
      disabled={isDisabled}
      underlayColor={focusBackgroundColor}
      style={containerStyle}
      testID={testID}
      onPress={onPress}
      {...accessibilityProps}
    >
      <View style={wrapperStyle}>
        <View style={leftWrapperStyle}>
          <View style={imageWrapperStyle}>{leftIcon}</View>
          <View style={textWrapperStyle}>
            <Text getStyles={() => ({ textStyle })}>{label}</Text>
            <Text size="small">{description}</Text>
          </View>
        </View>
        {rightIcon}
      </View>
    </TouchableHighlight>
  );
};
