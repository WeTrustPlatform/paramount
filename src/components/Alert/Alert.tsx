import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Icon, IconProps } from '../Icon';
import { Text, TextProps } from '../Typography';

export type Intent = 'danger' | 'info' | 'success' | 'warning';

interface AlertBaseProps {
  /** Title of the alert. */
  title?: string;

  /** Description of the alert. */
  description?: string;

  /**
   * Intent of the alert.
   * @default info
   */
  intent?: Intent;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export interface AlertOverrides {
  Root: RootProps;
  LeftWrapper: LeftWrapperProps;
  AlertIcon: AlertIconProps;
  Body: BodyProps;
  Title: TitleProps;
  Description: DescriptionProps;
  Action: ActionProps;
}

export interface AlertProps
  extends WithOverrides<AlertBaseProps, AlertOverrides> {}

const defaultProps = {
  intent: 'info' as const,
};

export const Alert = (props: AlertProps) => {
  const {
    title,
    description,
    intent = defaultProps.intent,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Alert.Root'),
    overrides.Root,
  );
  const [LeftWrapper, leftWrapperProps] = getOverrides(
    StyledLeftWrapper,
    props,
    dlv(theme, 'overrides.Alert.LeftWrapper'),
    overrides.LeftWrapper,
  );
  const [Body, bodyProps] = getOverrides(StyledBody, props, overrides.Body);
  const [AlertIcon, alertIconProps] = getOverrides(
    StyledAlertIcon,
    props,
    dlv(theme, 'overrides.Alert.AlertIcon'),
    overrides.AlertIcon,
  );
  const [Title, titleProps] = getOverrides(
    StyledTitle,
    props,
    dlv(theme, 'overrides.Alert.Title'),
    overrides.Title,
  );
  const [Description, descriptionProps] = getOverrides(
    StyledDescription,
    props,
    dlv(theme, 'overrides.Alert.Description'),
    overrides.Description,
  );
  const [Action, actionProps] = getOverrides(
    StyledAction,
    props,
    dlv(theme, 'overrides.Alert.Action'),
    overrides.Action,
  );

  return (
    <Root intent={intent} {...rootProps}>
      <LeftWrapper {...leftWrapperProps}>
        <AlertIcon intent={intent} {...alertIconProps} />
        <Body {...bodyProps}>
          <Title intent={intent} title={title} {...titleProps} />
          <Description
            intent={intent}
            description={description}
            {...descriptionProps}
          />
        </Body>
      </LeftWrapper>
      <Action intent={intent} {...actionProps} />
    </Root>
  );
};

interface PropsWithChildren {
  children?: React.ReactNode;
}

interface PropsWithIntent {
  intent?: Intent;
}

interface RootProps extends ViewProps, PropsWithChildren, PropsWithIntent {}

const StyledRoot = (props: RootProps) => {
  const { intent = defaultProps.intent, testID, children, style } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        {
          alignItems: 'center',
          backgroundColor: theme.colors.background.content,
          borderLeftColor: theme.colors.border[intent],
          borderLeftWidth: 5,
          borderRadius: theme.controlBorderRadius.medium,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
          ...theme.elevations[2],
        },
        style,
      ]}
      testID={testID}
    >
      {children}
    </View>
  );
};

interface LeftWrapperProps extends ViewProps, PropsWithChildren {}

const StyledLeftWrapper = (props: LeftWrapperProps) => {
  const { children, style } = props;

  return (
    <View
      style={[
        {
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

interface AlertIconProps extends Omit<IconProps, 'name'>, PropsWithIntent {}

const StyledAlertIcon = (props: AlertIconProps) => {
  const { intent = defaultProps.intent } = props;

  switch (intent) {
    case 'success':
      return <Icon name="check-circle" color="success" />;
    case 'warning':
      return <Icon name="alert-triangle" color="warning" />;
    case 'danger':
      return <Icon name="alert-circle" color="danger" />;
    default:
      return <Icon name="info" color="info" />;
  }
};

interface BodyProps extends ViewProps, PropsWithChildren {}

const StyledBody = (props: BodyProps) => {
  const { children, style } = props;

  return (
    <View
      style={[
        {
          paddingLeft: 16,
          flex: 1,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

interface TitleProps extends TextProps, PropsWithIntent {
  title?: string;
}

const StyledTitle = (props: TitleProps) => {
  const { title, intent = defaultProps.intent, ...textProps } = props;

  return (
    <Text weight="bold" {...textProps}>
      {title}
    </Text>
  );
};

interface DescriptionProps extends TextProps, PropsWithIntent {
  description?: string;
}

const StyledDescription = (props: DescriptionProps) => {
  const { description, intent = defaultProps.intent, ...textProps } = props;

  return <Text {...textProps}>{description}</Text>;
};

interface ActionProps extends PropsWithChildren, PropsWithIntent {}

const StyledAction = (props: ActionProps) => {
  return <></>;
};
