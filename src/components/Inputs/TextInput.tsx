import * as React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import {
  GetTextInputStyles,
  getTextInputStyles,
  TextInputStyles,
} from './TextInput.styles';

export interface TextInputProps extends RNTextInputProps {
  children?: React.ReactNode;
  innerRef?: React.Ref<RNTextInput>;
  size?: ControlSize;
  isDisabled?: boolean;
  isInvalid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClear?: () => void;
  isClearable?: boolean;
  getStyles?: ReplaceReturnType<
    GetTextInputStyles,
    DeepPartial<TextInputStyles>
  >;
}

const TextInputBase = (props: TextInputProps) => {
  const {
    getStyles,
    innerRef,
    isClearable,
    isDisabled = false,
    isInvalid = false,
    leftIcon = null,
    numberOfLines,
    onClear = () => {
      return;
    },
    rightIcon = null,
    size = 'medium',
    value,
    textContentType,
    onChangeText = () => {
      return;
    },
    ...textInputProps
  } = props;
  const theme = useTheme();

  const {
    inputStyle,
    placeholderTextColor,
    containerStyle,
    leftContainerStyle,
    rightContainerStyle,
  } = mergeStyles(getTextInputStyles, getStyles)(
    {
      hasLeftIcon: !!leftIcon,
      hasRightIcon: !!(rightIcon || isClearable),
      isDisabled,
      isInvalid,
      numberOfLines,
      size,
    },
    theme,
  );

  return (
    <View style={containerStyle}>
      <View style={leftContainerStyle}>{leftIcon}</View>
      {/*
      // @ts-ignore: name prop being passed */}
      <RNTextInput
        ref={innerRef}
        style={inputStyle}
        editable={!isDisabled}
        placeholderTextColor={placeholderTextColor}
        name={textContentType}
        numberOfLines={numberOfLines}
        value={value}
        onChangeText={onChangeText}
        textContentType={textContentType}
        {...textInputProps}
      />
      <View style={rightContainerStyle}>
        {value && isClearable ? (
          <TouchableOpacity
            onPress={() => {
              onChangeText('');
              onClear();
            }}
          >
            <Icon name="x" size={24} color={theme.colors.text.default} />
          </TouchableOpacity>
        ) : (
          rightIcon || null
        )}
      </View>
    </View>
  );
};

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => {
    return <TextInputBase {...props} innerRef={ref} />;
  },
);
