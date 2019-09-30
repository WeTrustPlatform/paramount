import * as React from 'react';
import { Platform, View, ViewProps, ViewStyle } from 'react-native';

import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Text, TextProps } from './Text';

type LabelPosition = 'top' | 'left' | 'right';

interface LabelBaseProps {
  /**
   * Label of the field.
   */
  label?: string;

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
        <LabelText position={position} {...labelTextProps}>
          {label}
        </LabelText>
      )}
      <Wrapper position={position} {...wrapperProps}>
        {position === 'left' && (
          <LabelText position={position} {...labelTextProps}>
            {label}
          </LabelText>
        )}
        {children}
        {position === 'right' && (
          <LabelText position={position} {...labelTextProps}>
            {label}
          </LabelText>
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
  position: LabelPosition;
}

const StyledLabelText = (props: LabelTextProps) => {
  const { children, position, style, ...textProps } = props;

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
      {children}
    </Text>
  );
};
