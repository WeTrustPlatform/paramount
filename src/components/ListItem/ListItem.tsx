import dlv from 'dlv';
import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import { useTheme, ControlSize } from '../../theme';
import { getOverrides, getStyle, WithOverrides } from '../../utils/Overrides';
import { OptionalString } from '../../utils/types';
import { Avatar, AvatarProps } from '../Avatar';
import { Text, TextProps } from '../Typography';
import { useControlSizeUtils } from '../../utils/ControlSize';

interface ListItemBaseProps {
  /**
   * Title of the list item
   */
  title?: OptionalString;

  /**
   * Description of the list item
   */
  description?: OptionalString;

  /**
   * Source of the avatar
   */
  source?: ImageSourcePropType;

  /**
   * When true, list item will not be able to be pressed.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Size of the ListItem.
   * @default "medium"
   */
  size?: ControlSize | number;

  /**
   * Called when pressing list item
   */
  onPress?: (event: GestureResponderEvent) => void;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export interface ListItemOverrides {
  Root: RootProps;
  Touchable: TouchableProps;
  Title: TitleProps;
  TextWrapper: TextWrapperProps;
  Description: DescriptionProps;
  Action: ActionProps;
  Avatar: AvatarProps;
}

export interface ListItemProps
  extends WithOverrides<ListItemBaseProps, ListItemOverrides> {}

export const ListItem = (props: ListItemProps) => {
  const {
    isDisabled = false,
    title,
    description,
    size = 'medium',
    onPress,
    testID,
    source,
    overrides = {},
  } = props;
  const theme = useTheme();
  const { getControlHeight } = useControlSizeUtils();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    { isDisabled, size },
    dlv(theme, 'overrides.ListItem.Root'),
    overrides.Root,
  );
  const [Touchable, touchableProps] = getOverrides(
    StyledTouchable,
    props,
    { onPress, testID, isDisabled },
    dlv(theme, 'overrides.ListItem.Touchable'),
    overrides.Touchable,
  );
  const [TextWrapper, textWrapperProps] = getOverrides(
    StyledTextWrapper,
    props,
    {
      hasAvatar:
        !!source ||
        !!overrides.Avatar ||
        !!dlv(theme, 'overrides.ListItem.Avatar'),
    },
    dlv(theme, 'overrides.ListItem.TextWrapper'),
    overrides.TextWrapper,
  );
  const [Title, titleProps] = getOverrides(
    StyledTitle,
    props,
    { title, size, isDisabled },
    dlv(theme, 'overrides.ListItem.Title'),
    overrides.Title,
  );
  const [Description, descriptionProps] = getOverrides(
    StyledDescription,
    props,
    { description, size, isDisabled },
    dlv(theme, 'overrides.ListItem.Description'),
    overrides.Description,
  );
  const [Action, rightIconProps] = getOverrides(
    StyledAction,
    props,
    { isDisabled },
    dlv(theme, 'overrides.ListItem.Action'),
    overrides.Action,
  );
  const [AvatarR, avatarProps] = getOverrides(
    StyledAvatar,
    props,
    { source, size: getControlHeight(size) - 8 },
    dlv(theme, 'overrides.ListItem.Avatar'),
    overrides.Avatar,
  );

  return (
    <Root {...rootProps}>
      <Touchable {...touchableProps}>
        <AvatarR {...avatarProps} />
        <TextWrapper {...textWrapperProps}>
          <Title {...titleProps} />
          <Description {...descriptionProps} />
        </TextWrapper>
      </Touchable>
      <Action {...rightIconProps} />
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
  size: ControlSize | number;
}

const StyledRoot = (props: RootProps) => {
  const { children, style, isDisabled, size, ...viewProps } = props;
  const theme = useTheme();
  const { getControlHeight } = useControlSizeUtils();

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          minHeight: getControlHeight(size) + 8,
          backgroundColor: isDisabled
            ? theme.colors.background.greyLight
            : theme.colors.background.content,
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface TouchableProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  isDisabled: boolean;
}

const StyledTouchable = (props: TouchableProps) => {
  const { style, children, isDisabled, ...touchableProps } = props;

  return (
    <TouchableOpacity
      style={[
        {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}
      disabled={isDisabled}
      {...touchableProps}
    >
      {children}
    </TouchableOpacity>
  );
};

interface TitleProps extends TextProps {
  title?: OptionalString;
  size: ControlSize | number;
  isDisabled: boolean;
}

const StyledTitle = (props: TitleProps) => {
  const { title, style, size, isDisabled, ...textProps } = props;

  if (!title) return null;

  return (
    <Text
      size={size}
      color={isDisabled ? 'muted' : 'default'}
      style={[{}, getStyle(props, style)]}
      {...textProps}
    >
      {title}
    </Text>
  );
};

interface TextWrapperProps extends ViewProps {
  children?: React.ReactNode;
  hasAvatar: boolean;
}

const StyledTextWrapper = (props: TextWrapperProps) => {
  const { children, style, hasAvatar = false, ...viewProps } = props;

  return (
    <View
      style={[
        { flex: 1, justifyContent: 'center', paddingLeft: hasAvatar ? 8 : 0 },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface DescriptionProps extends TextProps {
  description?: OptionalString;
  size: ControlSize | number;
  isDisabled: boolean;
}

const StyledDescription = (props: DescriptionProps) => {
  const { style, description, size, isDisabled, ...viewProps } = props;
  const { getSmallerHeightControlSize } = useControlSizeUtils();

  if (!description) return null;

  return (
    <Text
      size={getSmallerHeightControlSize(size)}
      color="muted"
      style={[{}, getStyle(props, style)]}
      {...viewProps}
    >
      {description}
    </Text>
  );
};

interface ActionProps {
  isDisabled: boolean;
}

const StyledAction = (props: ActionProps) => {
  return <></>;
};

const StyledAvatar = (props: AvatarProps) => {
  const { source, name } = props;

  if (!source && !name) return null;

  return <Avatar {...props} />;
};
