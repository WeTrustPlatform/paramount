import dlv from 'dlv';
import * as React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, getStyle, WithOverrides } from '../../utils/overrides';
import { OptionalString } from '../../utils/types';
import { Avatar, AvatarProps } from '../Avatar';
import { Text, TextProps } from '../Typography';

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
    onPress,
    testID,
    source,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Touchable, touchableProps] = getOverrides(
    StyledTouchable,
    props,
    dlv(theme, 'overrides.ListItem.Touchable'),
    overrides.Touchable,
  );
  const [TextWrapper, textProps] = getOverrides(
    StyledTextWrapper,
    props,
    dlv(theme, 'overrides.ListItem.TextWrapper'),
    overrides.TextWrapper,
  );
  const [Title, titleProps] = getOverrides(
    StyledTitle,
    props,
    dlv(theme, 'overrides.ListItem.Title'),
    overrides.Title,
  );
  const [Description, descriptionProps] = getOverrides(
    StyledDescription,
    props,
    dlv(theme, 'overrides.ListItem.Description'),
    overrides.Description,
  );
  const [Action, rightIconProps] = getOverrides(
    StyledAction,
    props,
    dlv(theme, 'overrides.ListItem.Action'),
    overrides.Action,
  );
  const [AvatarR, avatarProps] = getOverrides(
    StyledAvatar,
    props,
    dlv(theme, 'overrides.ListItem.Avatar'),
    overrides.Avatar,
  );
  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.ListItem.Root'),
    overrides.Root,
  );

  return (
    <Root isDisabled={isDisabled} {...rootProps}>
      <Touchable
        onPress={onPress}
        testID={testID}
        isDisabled={isDisabled}
        {...touchableProps}
      >
        <AvatarR size="small" source={source} {...avatarProps} />
        <TextWrapper
          hasAvatar={
            !!source ||
            !!overrides.Avatar ||
            !!dlv(theme, 'overrides.ListItem.Avatar')
          }
          {...textProps}
        >
          <Title title={title} {...titleProps} />
          <Description description={description} {...descriptionProps} />
        </TextWrapper>
      </Touchable>
      <Action isDisabled={isDisabled} {...rightIconProps} />
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
}

const StyledRoot = (props: RootProps) => {
  const { children, style, isDisabled, ...viewProps } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          height: 72,
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
      {...touchableProps}
    >
      {children}
    </TouchableOpacity>
  );
};

interface TitleProps extends TextProps {
  title?: OptionalString;
}

const StyledTitle = (props: TitleProps) => {
  const { title, style, ...textProps } = props;

  if (!title) return null;

  return (
    <Text size="large" style={[{}, getStyle(props, style)]} {...textProps}>
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
}

const StyledDescription = (props: DescriptionProps) => {
  const { style, description, ...viewProps } = props;

  if (!description) return null;

  return (
    <Text
      size="small"
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
