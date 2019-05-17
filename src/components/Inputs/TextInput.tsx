import * as React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetTextInputStyles,
  getTextInputStyles,
  TextInputStyles,
} from './TextInput.styles';

export interface TextInputProps extends RNTextInputProps {
  children?: React.ReactNode;
  name?: string;
  innerRef?: React.Ref<RNTextInput>;
  size?: ControlSize;
  isDisabled?: boolean;
  isInvalid?: boolean;
  getStyles?: ReplaceReturnType<
    GetTextInputStyles,
    DeepPartial<TextInputStyles>
  >;
}

const TextInputBase = (props: TextInputProps) => {
  const {
    isDisabled = false,
    isInvalid = false,
    size = 'medium',
    getStyles,
    name,
    innerRef,
    numberOfLines,
    ...textInputProps
  } = props;
  const theme = useTheme();

  const { inputStyle, placeholderTextColor } = mergeStyles(
    getTextInputStyles,
    getStyles,
  )(
    {
      isDisabled,
      isInvalid,
      numberOfLines,
      size,
    },
    theme,
  );

  return (
    // @ts-ignore: name prop does not exist, but on the web it is useful for browser autofill
    <RNTextInput
      ref={innerRef}
      style={inputStyle}
      editable={!isDisabled}
      placeholderTextColor={placeholderTextColor}
      name={name}
      numberOfLines={numberOfLines}
      {...textInputProps}
    />
  );
};

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => {
    return <TextInputBase {...props} innerRef={ref} />;
  },
);
