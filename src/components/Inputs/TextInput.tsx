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
  /**
   * Size of the text input.
   * @default medium
   */
  size?: ControlSize;

  /**
   * When true, text input is disabled
   */
  isDisabled?: boolean;

  /**
   * When true, text input will be highlighted as invalid
   */
  isInvalid?: boolean;

  /**
   * Icon placed on the left side
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon placed on the left side
   */
  rightIcon?: React.ReactNode;

  /**
   * Called when clear icon is pressed.
   */
  onClear?: () => void;

  /**
   * When true, when value is not empty, a clear icon is displayed
   */
  isClearable?: boolean;

  /** Use `ref` instead */
  innerRef?: React.Ref<RNTextInput>;

  /**
   * Callback to get element styles.
   */
  getStyles?: ReplaceReturnType<
    GetTextInputStyles,
    DeepPartial<TextInputStyles>
  >;
}

const TextInputBase = (props: TextInputProps) => {
  const {
    getStyles,
    innerRef,
    isClearable = false,
    isDisabled = false,
    isInvalid = false,
    leftIcon,
    onClear = () => {
      return;
    },
    rightIcon,
    size = 'medium',
    value,
    textContentType,
    onChangeText = () => {
      return;
    },
    placeholderTextColor: placeholderTextColorProp,
    ...textInputProps
  } = props;
  const theme = useTheme();

  const {
    inputStyle,
    placeholderTextColor,
    containerStyle,
    leftContainerStyle,
    rightContainerStyle,
  } = mergeStyles(getTextInputStyles, getStyles)(props, theme);

  return (
    <View style={containerStyle}>
      {leftIcon && <View style={leftContainerStyle}>{leftIcon}</View>}
      {/*
      // @ts-ignore: name prop being passed for web */}
      <RNTextInput
        ref={innerRef}
        style={inputStyle}
        editable={!isDisabled}
        placeholderTextColor={placeholderTextColorProp || placeholderTextColor}
        name={textContentType}
        value={value}
        onChangeText={onChangeText}
        textContentType={textContentType}
        {...textInputProps}
      />
      {((value && isClearable) || rightIcon) && (
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
            rightIcon
          )}
        </View>
      )}
    </View>
  );
};

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => {
    return <TextInputBase {...props} innerRef={ref} />;
  },
);
