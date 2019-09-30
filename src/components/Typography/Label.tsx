import * as React from 'react';
import { Platform, View, ViewProps, ViewStyle } from 'react-native';

import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Text, TextProps } from './Text';

type LabelPosition = 'top' | 'left' | 'right';

interface LabelBaseProps {
  /**
   * Label of the field.
   */
  label?: string | false;

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

  const [Root, rootProps] = getOverrides(StyledRoot, props, overrides.Root);
  const [Wrapper, wrapperProps] = getOverrides(
    StyledWrapper,
    props,
    overrides.Wrapper,
  );
  const [LabelText, labelTextProps] = getOverrides(
    StyledLabelText,
    props,
    overrides.LabelText,
  );

  return (
    <Root {...rootProps}>
      {position === 'top' && (
        <LabelText position={position} label={label} {...labelTextProps} />
      )}
      <Wrapper position={position} {...wrapperProps}>
        {position === 'left' && (
          <LabelText position={position} label={label} {...labelTextProps} />
        )}
        {children}
        {position === 'right' && (
          <LabelText position={position} label={label} {...labelTextProps} />
        )}
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
        paddingLeft: 8,
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
  label?: string | false;
  position: LabelPosition;
}

const StyledLabelText = (props: LabelTextProps) => {
  const { label, position, style, ...textProps } = props;

  if (!label) return null;

  let textStyle: ViewStyle = {};

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
      style={[textStyle, style]}
      // @ts-ignore: Compat with web
      accessibilityRole={Platform.OS === 'web' ? 'label' : 'none'}
      {...textProps}
    >
      {label}
    </Text>
  );
};
