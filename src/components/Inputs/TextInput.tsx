import * as React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ThemeContext } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetTextInputStyles,
  getTextInputStyles,
  TextInputSize,
  TextInputStyles,
} from './TextInput.styles';

export interface TextInputProps extends RNTextInputProps {
  children?: React.ReactNode;
  name?: string;
  innerRef?: React.Ref<RNTextInput>;
  size?: TextInputSize;
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
    value,
    getStyles,
    name,
    innerRef,
    ...textInputProps
  } = props;
  const theme = React.useContext(ThemeContext);

  const { inputStyle, placeholderTextColor } = mergeStyles(
    getTextInputStyles,
    getStyles,
  )(
    {
      isDisabled,
      isInvalid,
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
      value={value}
      name={name}
      {...textInputProps}
    />
  );
};

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => {
    return <TextInputBase {...props} innerRef={ref} />;
  },
);

export default TextInput;
