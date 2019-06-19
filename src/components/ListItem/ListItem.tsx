import * as React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
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

export interface ListItemProps {
  /**
   * Size of the list item.
   * @default "medium"
   */
  size?: ControlSize;

  /**
   * When true, list item will not be able to be pressed.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Title of the list item
   */
  title?: string;

  /**
   * Description of the list item
   */
  description?: string;

  /**
   * Props to be passed to `Avatar`
   */
  avatarProps?: AvatarProps;

  /**
   * Icon replacing `Avatar` on the left hand-side
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon replacing right hand-side icon
   */
  rightIcon?: React.ReactNode;

  /**
   * Called when pressing list item
   */
  onPress?: (event: GestureResponderEvent) => void;

  /** Label for screen readers */
  accessibilityLabel?: string;

  /** Hint for screen readers */
  accessibilityHint?: string;

  /**
   * When true, indicates that the view is an accessibility element.
   * @default true
   */
  accessible?: boolean;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetListItemStyles, DeepPartial<ListItemStyles>>;

  /** Used to locate this view in end-to-end tests. */
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
    accessibilityHint,
    accessibilityLabel,
    accessible = true,
  } = props;
  const theme = useTheme();

  const {
    imageWrapperStyle,
    leftWrapperStyle,
    textWrapperStyle,
    touchableStyle,
    titleStyle,
    descriptionStyle,
    wrapperStyle,
  } = mergeStyles(
    getListItemStyles,
    getStyles,
    theme.components.getListItemStyles,
  )(props, theme);

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={touchableStyle}
      testID={testID}
      onPress={onPress}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessible={accessible}
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
    </TouchableOpacity>
  );
};
