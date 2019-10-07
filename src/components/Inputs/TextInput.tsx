import dlv from 'dlv';
import * as React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';

import { ControlSize, useTheme } from '../../theme';
import { isControlSize } from '../../utils/isControlSize';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Icon } from '../Icon';

interface TextInputBaseProps extends RNTextInputProps {
  /**
   * Size of the text input.
   * @default medium
   */
  size?: ControlSize | number;

  /**
   * When true, text input is disabled
   */
  isDisabled?: boolean;

  /**
   * When true, text input will be highlighted as invalid
   */
  isInvalid?: boolean;

  /**
   * Alias for onChangeText, for API consistency
   */
  onValueChange?: (value: string) => void;

  /**
   * Called when clear icon is pressed.
   */
  onClear?: () => void;

  /**
   * When true, when value is not empty, a clear icon is displayed
   */
  isClearable?: boolean;
}

export interface TextInputOverrides {
  Root: RootProps;
  LeftIconWrapper: LeftIconWrapperProps;
  LeftIcon: StyledIconProps;
  Input: InputProps;
  RightIcon: StyledIconProps;
  RightIconWrapper: RightIconWrapperProps;
}

export interface TextInputProps
  extends WithOverrides<TextInputBaseProps, TextInputOverrides> {}

export const TextInput = (props: TextInputProps) => {
  const {
    size = 'medium',
    isClearable = false,
    isDisabled = false,
    isInvalid = false,
    onClear = () => {
      return;
    },
    onValueChange = () => {
      return;
    },
    onChangeText = () => {
      return;
    },
    value,
    overrides = {},
    ...textInputProps
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.TextInput.Root'),
    overrides.Root,
  );
  const [Input, inputProps] = getOverrides(
    StyledInput,
    props,
    dlv(theme, 'overrides.TextInput.Input'),
    overrides.Input,
  );
  const [LeftIconWrapper, leftIconWrapperProps] = getOverrides(
    StyledLeftIconWrapper,
    props,
    dlv(theme, 'overrides.TextInput.LeftIconWrapper'),
    overrides.LeftIconWrapper,
  );
  const [LeftIcon, leftIconProps] = getOverrides(
    StyledLeftIcon,
    props,
    dlv(theme, 'overrides.TextInput.LeftIcon'),
    overrides.LeftIcon,
  );
  const [RightIconWrapper, rightIconWrapperProps] = getOverrides(
    StyledRightIconWrapper,
    props,
    dlv(theme, 'overrides.TextInput.RightIconWrapper'),
    overrides.RightIconWrapper,
  );
  const [RightIcon, rightIconProps] = getOverrides(
    StyledRightIcon,
    props,
    dlv(theme, 'overrides.TextInput.RightIcon'),
    overrides.RightIcon,
  );

  return (
    <Root {...rootProps}>
      <LeftIconWrapper {...leftIconWrapperProps}>
        <LeftIcon
          isClearable={isClearable}
          onClear={onClear}
          onValueChange={onValueChange}
          value={value}
          onChangeText={onChangeText}
          {...leftIconProps}
        />
      </LeftIconWrapper>
      <Input
        hasLeftIcon={!!overrides.LeftIcon}
        hasRightIcon={!!(isClearable || overrides.RightIcon)}
        size={size}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        onValueChange={onValueChange}
        value={value}
        onChangeText={onChangeText}
        {...textInputProps}
        {...inputProps}
      />
      <RightIconWrapper {...rightIconWrapperProps}>
        <RightIcon
          isClearable={isClearable}
          onClear={onClear}
          onValueChange={onValueChange}
          value={value}
          onChangeText={onChangeText}
          {...rightIconProps}
        />
      </RightIconWrapper>
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

interface InputProps extends RNTextInputProps {
  size: ControlSize | number;
  isDisabled: boolean;
  isInvalid: boolean;
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
  onValueChange: (value: string) => void;
  onChangeText: (value: string) => void;
}

const StyledInput = (props: InputProps) => {
  const {
    isDisabled,
    isInvalid,
    onValueChange,
    onChangeText,
    size,
    style,
    numberOfLines,
    textContentType,
    hasLeftIcon,
    hasRightIcon,
    placeholderTextColor,
    ...textInputProps
  } = props;
  const theme = useTheme();

  const {
    borderRadius,
    height,
    paddingLeft,
    paddingRight,
    textSize,
  } = isControlSize(size)
    ? {
        borderRadius: theme.controlBorderRadius[size],
        height: theme.controlHeights[size],
        paddingLeft: theme.controlPaddings[size],
        paddingRight: theme.controlPaddings[size],
        textSize: theme.textSizes[size],
      }
    : {
        borderRadius: theme.controlBorderRadius.medium,
        height: size,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: theme.controlPaddings.medium,
        textSize: theme.textSizes.medium,
      };

  return (
    // @ts-ignore
    <RNTextInput
      style={[
        {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.default,
          borderRadius,
          borderWidth: 1,
          color: theme.colors.text.default,
          height,
          paddingLeft,
          paddingRight,
          width: '100%',
          ...textSize,
          ...(isDisabled
            ? { backgroundColor: theme.colors.background.greyLight }
            : {}),
          ...(isInvalid ? { borderColor: theme.colors.border.danger } : {}),
          ...(numberOfLines
            ? {
                height: numberOfLines * height,
                paddingVertical: 16,
              }
            : {}),
          ...(hasLeftIcon && { paddingLeft: 40 }),
          ...(hasRightIcon && { paddingRight: 40 }),
        },
        style,
      ]}
      editable={!isDisabled}
      placeholderTextColor={placeholderTextColor || theme.colors.text.muted}
      name={textContentType}
      numberOfLines={numberOfLines}
      textContentType={textContentType}
      onChangeText={text => {
        onValueChange(text);
        onChangeText(text);
      }}
      {...textInputProps}
    />
  );
};

interface LeftIconWrapperProps extends ViewProps, PropsWithChildren {}

const StyledLeftIconWrapper = (props: LeftIconWrapperProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View
      style={[
        {
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          left: 0,
          paddingHorizontal: 8,
          position: 'absolute',
          zIndex: 1,
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface RightIconWrapperProps extends ViewProps, PropsWithChildren {}

const StyledRightIconWrapper = (props: RightIconWrapperProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View
      style={[
        {
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          paddingHorizontal: 8,
          position: 'absolute',
          right: 0,
          zIndex: 1,
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface StyledIconProps {
  onValueChange: (value: string) => void;
  onChangeText: (text: string) => void;
  value?: string;
  isClearable: boolean;
  onClear: () => void;
}

const StyledLeftIcon = (props: StyledIconProps) => {
  return <></>;
};

const StyledRightIcon = (props: StyledIconProps) => {
  const { isClearable, onClear, onValueChange, onChangeText, value } = props;
  const theme = useTheme();

  if (!value || !isClearable) return null;

  return (
    <TouchableOpacity
      onPress={() => {
        onChangeText('');
        onValueChange('');
        onClear();
      }}
    >
      <Icon name="x" color={theme.colors.text.default} />
    </TouchableOpacity>
  );
};
