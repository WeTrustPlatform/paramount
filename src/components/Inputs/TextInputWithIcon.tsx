import * as React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { DeepPartial, Omit } from 'ts-essentials';

import { ThemeContext } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import TextInput, { TextInputProps } from './TextInput';
import { GetTextInputStyles, TextInputStyles } from './TextInput.styles';
import {
  getTextInputWithIconStyles,
  TextInputWithIconStyles,
} from './TextInputWithIcon.styles';

export interface TextInputWithIconProps
  extends Omit<TextInputProps, 'getStyles'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  getStyles?: ReplaceReturnType<
    GetTextInputStyles,
    DeepPartial<TextInputStyles & TextInputWithIconStyles>
  >;
}

const TextInputWithIconBase = (props: TextInputWithIconProps) => {
  const {
    leftIcon = null,
    rightIcon = null,
    getStyles,
    innerRef,
    ...textInputProps
  } = props;
  const theme = React.useContext(ThemeContext);
  const {
    containerStyle,
    leftContainerStyle,
    rightContainerStyle,
  } = mergeStyles(getTextInputWithIconStyles, getStyles)(theme);

  return (
    <View style={containerStyle}>
      <View style={leftContainerStyle}>{leftIcon}</View>
      <TextInput ref={innerRef} {...textInputProps} />
      <View style={rightContainerStyle}>{rightIcon}</View>
    </View>
  );
};

export const TextInputWithIcon = React.forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => <TextInputWithIconBase {...props} innerRef={ref} />,
);

export default TextInputWithIcon;
