import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ControlSize, TextSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Avatar, AvatarProps } from '../Avatar';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import {
  GetListItemStyles,
  getListItemStyles,
  ListItemStyles,
} from './ListItem.styles';

export interface ListItemProps extends AccessibilityProps {
  size?: ControlSize;
  isDisabled?: boolean;
  title?: string;
  description?: string;
  avatarProps?: AvatarProps;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  getStyles?: ReplaceReturnType<GetListItemStyles, DeepPartial<ListItemStyles>>;
  testID?: string;
}

const iconSize: {
  [size in ControlSize]: number;
} = {
  large: 32,
  medium: 24,
  small: 16,
};

const avatarSize: {
  [size in ControlSize]: number;
} = {
  large: 40,
  medium: 32,
  small: 24,
};

const titleSize: {
  [size in ControlSize]: TextSize;
} = {
  large: 'large',
  medium: 'medium',
  small: 'small',
};

const descriptionSize: {
  [size in ControlSize]: TextSize;
} = {
  large: 'medium',
  medium: 'small',
  small: 'xsmall',
};

export const ListItem = (props: ListItemProps) => {
  const {
    avatarProps,
    getStyles,
    isDisabled = false,
    title,
    description,
    size = 'medium',
    onPress,
    rightIcon,
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
    titleStyle,
    descriptionStyle,
    focusBackgroundColor,
    wrapperStyle,
  } = mergeStyles(
    getListItemStyles,
    getStyles,
    theme.components.getListItemStyles,
  )({ size, isDisabled }, theme);

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
          <View style={imageWrapperStyle}>
            {leftIcon || avatarProps ? (
              <Avatar size={avatarSize[size]} {...avatarProps} />
            ) : null}
          </View>
          <View style={textWrapperStyle}>
            {title && (
              <Text
                getStyles={() => ({ textStyle: titleStyle })}
                size={titleSize[size]}
                weight="500"
              >
                {title}
              </Text>
            )}
            {description && (
              <Text
                getStyles={() => ({ textStyle: descriptionStyle })}
                size={descriptionSize[size]}
                color="muted"
              >
                {description}
              </Text>
            )}
          </View>
        </View>
        {rightIcon === null
          ? null
          : rightIcon || (
              <Icon
                color="default"
                size={iconSize[size]}
                name="chevron-right"
              />
            )}
      </View>
    </TouchableHighlight>
  );
};
