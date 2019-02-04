import * as React from 'react';
import {
  ImageSourcePropType,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Avatar, AvatarProps } from '../Avatar';
import { Text } from '../Typography';
import {
  GetListItemStyles,
  getListItemStyles,
  ListItemSize,
  ListItemStyles,
} from './ListItem.styles';

export interface ListItemProps extends TouchableHighlightProps {
  theme: Theme;
  size?: ListItemSize;
  isDisabled?: boolean;
  label: string;
  description?: string;
  imageSource?: ImageSourcePropType;
  avatarProps?: AvatarProps;
  rightIcon?: React.ReactNode;
  getStyles?: ReplaceReturnType<GetListItemStyles, DeepPartial<ListItemStyles>>;
}

const ListItemBase = (props: ListItemProps) => {
  const {
    getStyles,
    isDisabled = false,
    label,
    description,
    imageSource,
    size = 'medium',
    rightIcon = null,
    theme,
    avatarProps,
    ...touchableHighlightProps
  } = props;

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
      {...touchableHighlightProps}
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

export const ListItem = withTheme(React.memo(ListItemBase));
export default ListItem;
