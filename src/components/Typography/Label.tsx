import dlv from 'dlv';
import React from 'react';
import { Platform, TextStyle, View, ViewProps, ViewStyle } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, getStyle, WithOverrides } from '../../utils/Overrides';
import { OptionalString } from '../../utils/types';

import { Text, TextProps } from './Text';

export type LabelPosition = 'top' | 'left' | 'right';

interface LabelBaseProps {
  /**
   * Label of the field.
   */
  label?: OptionalString;

  /**
   * Position of the field.
   * @default "top"
   */
  position?: LabelPosition;

  /** Content to wrap with. */
  children?: React.ReactNode;
}

export interface LabelOverrides {
  Root: RootProps;
  Wrapper: WrapperProps;
  LabelText: LabelTextProps;
}

export interface LabelProps
  extends WithOverrides<LabelBaseProps, LabelOverrides> {}

export const Label = (props: LabelProps) => {
  const { children, position = 'top', overrides = {}, label } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    {},
    dlv(theme, 'overrides.Label.Root'),
    overrides.Root,
  );
  const [Wrapper, wrapperProps] = getOverrides(
    StyledWrapper,
    props,
    { position },
    dlv(theme, 'overrides.Label.Wrapper'),
    overrides.Wrapper,
  );
  const [LabelText, labelTextProps] = getOverrides(
    StyledLabelText,
    props,
    { position, label },
    dlv(theme, 'overrides.Label.LabelText'),
    overrides.LabelText,
  );

  return (
    <Root {...rootProps}>
      {position === 'top' && <LabelText {...labelTextProps} />}
      <Wrapper {...wrapperProps}>
        {position === 'left' && <LabelText {...labelTextProps} />}
        {children}
        {position === 'right' && <LabelText {...labelTextProps} />}
      </Wrapper>
    </Root>
  );
};

interface PropsWithChildren {
  children?: React.ReactNode;
}

interface RootProps extends ViewProps, PropsWithChildren {}

const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View style={[style]} {...viewProps}>
      {children}
    </View>
  );
};

interface WrapperProps extends ViewProps, PropsWithChildren {
  position: LabelPosition;
}

const StyledWrapper = (props: WrapperProps) => {
  const { children, style, position, ...viewProps } = props;

  let wrapperStyle: ViewStyle = {};

  switch (position) {
    case 'left':
      wrapperStyle = {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8,
      };
      break;
    case 'right':
      wrapperStyle = {
        flexDirection: 'row',
        alignItems: 'center',
      };
      break;
    case 'top':
      wrapperStyle = { paddingBottom: 4 };
      break;
    default:
      wrapperStyle = { paddingBottom: 4 };
      break;
  }

  return (
    <View style={[wrapperStyle, style]} {...viewProps}>
      {children}
    </View>
  );
};

interface LabelTextProps extends TextProps, PropsWithChildren {
  label?: OptionalString;
  position: LabelPosition;
}

const StyledLabelText = (props: LabelTextProps) => {
  const { label, position, style, ...textProps } = props;

  if (!label) return null;

  let textStyle: TextStyle = {};

  switch (position) {
    case 'left':
      textStyle = { paddingRight: 8 };
      break;
    case 'right':
      textStyle = { paddingLeft: 8 };
      break;
    case 'top':
      textStyle = { paddingBottom: 4 };
      break;
    default:
      textStyle = { paddingBottom: 4 };
      break;
  }

  return (
    <Text
      style={[textStyle, getStyle(props, style)]}
      // @ts-ignore: Compat with web
      accessibilityRole={Platform.OS === 'web' ? 'label' : 'none'}
      {...textProps}
    >
      {label}
    </Text>
  );
};
