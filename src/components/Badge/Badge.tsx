import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { ContainerShape, ControlSize, FillColor } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { OptionalString } from '../../utils/types';
import { Text, TextProps } from '../Typography';

interface BadgeBaseProps {
  /** Title of the badge */
  title?: OptionalString;

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

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export interface BadgeOverrides {
  Root: RootProps;
  Title: TitleProps;
}

export interface BadgeProps
  extends WithOverrides<BadgeBaseProps, BadgeOverrides> {}

const defaultProps = {
  size: 'medium' as const,
  color: 'neutral' as const,
  isSolid: false,
  shape: 'rounded' as const,
};

export const Badge = (props: BadgeProps) => {
  const {
    size = defaultProps.size,
    color = defaultProps.color,
    isSolid = defaultProps.isSolid,
    shape = defaultProps.shape,
    title,
    testID,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Badge.Root'),
    overrides.Root,
  );
  const [Title, titleProps] = getOverrides(
    StyledTitle,
    props,
    dlv(theme, 'overrides.Badge.Title'),
    overrides.Title,
  );

  return (
    <Root
      size={size}
      color={color}
      isSolid={isSolid}
      shape={shape}
      testID={testID}
      {...rootProps}
    >
      <Title
        size={size}
        color={color}
        isSolid={isSolid}
        title={title}
        {...titleProps}
      />
    </Root>
  );
};

interface PropsWithChildren {
  children?: React.ReactNode;
}

interface RootProps extends ViewProps, PropsWithChildren {
  color?: FillColor;
  size?: ControlSize | number;
  shape?: ContainerShape;
  isSolid?: boolean;
}

const StyledRoot = (props: RootProps) => {
  const {
    size = defaultProps.size,
    color = defaultProps.color,
    isSolid = defaultProps.isSolid,
    shape = defaultProps.shape,
    children,
    style,
    ...viewProps
  } = props;
  const theme = useTheme();
  const shapeStyles = theme.containerShapes[shape];
  const fills = isSolid ? theme.fills.solid : theme.fills.subtle;

  const colors = fills[color];
  const { height, paddingLeft, paddingRight } = isControlSize(size)
    ? {
        small: {
          height: theme.controlHeights.small,
          paddingLeft: theme.controlPaddings.small,
          paddingRight: theme.controlPaddings.small,
        },

        medium: {
          height: theme.controlHeights.medium,
          paddingLeft: theme.controlPaddings.medium,
          paddingRight: theme.controlPaddings.medium,
        },

        large: {
          height: theme.controlHeights.large,
          paddingLeft: theme.controlPaddings.large,
          paddingRight: theme.controlPaddings.large,
        },
      }[size]
    : {
        height: size,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: theme.controlPaddings.medium,
      };

  return (
    <View
      style={[
        {
          alignItems: 'center',
          alignSelf: 'flex-start',
          backgroundColor: colors.backgroundColor,
          display: 'flex',
          flexDirection: 'row',
          height,
          justifyContent: 'center',
          paddingLeft,
          paddingRight,
          ...shapeStyles,
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface TitleProps extends TextProps {
  color?: FillColor;
  title?: OptionalString;
  isSolid?: boolean;
}

const StyledTitle = (props: TitleProps) => {
  const {
    size = defaultProps.size,
    color = defaultProps.color,
    isSolid = defaultProps.isSolid,
    title,
    style,
    ...textProps
  } = props;
  const theme = useTheme();
  const fills = isSolid ? theme.fills.solid : theme.fills.subtle;

  const colors = fills[color];

  return (
    <Text
      weight="bold"
      style={[{ color: colors.color, textTransform: 'uppercase' }, style]}
      {...textProps}
    >
      {title}
    </Text>
  );
};
