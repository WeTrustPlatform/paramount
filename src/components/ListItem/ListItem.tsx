import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  ImageSourcePropType,
  TouchableHighlight,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ThemeContext } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Avatar, AvatarProps } from '../Avatar';
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
  imageSource?: ImageSourcePropType;
  avatarProps?: AvatarProps;
  rightIcon?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  getStyles?: ReplaceReturnType<GetListItemStyles, DeepPartial<ListItemStyles>>;
  testID?: string;
}

const ListItem = (props: ListItemProps) => {
  const {
    getStyles,
    isDisabled = false,
    label,
    description,
    imageSource,
    size = 'medium',
    onPress,
    rightIcon = null,
    avatarProps,
    testID,
    ...accessibilityProps
  } = props;
  const theme = React.useContext(ThemeContext);

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
          {(imageSource || avatarProps) && (
            <View style={imageWrapperStyle}>
              <Avatar
                source={imageSource}
                size={theme.controlHeights[size] - 8}
                {...avatarProps}
              />
            </View>
          )}
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

export default ListItem;
