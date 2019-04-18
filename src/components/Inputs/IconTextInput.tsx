import * as React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { DeepPartial, Omit } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  getIconTextInputStyles,
  IconTextInputStyles,
} from './IconTextInput.styles';
import { TextInput, TextInputProps } from './TextInput';
import { GetTextInputStyles, TextInputStyles } from './TextInput.styles';

export interface IconTextInputProps extends Omit<TextInputProps, 'getStyles'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  getStyles?: ReplaceReturnType<
    GetTextInputStyles,
    DeepPartial<TextInputStyles & IconTextInputStyles>
  >;
}

const IconTextInputBase = (props: IconTextInputProps) => {
  const {
    leftIcon = null,
    rightIcon = null,
    getStyles,
    innerRef,
    ...textInputProps
  } = props;

  const theme = useTheme();

  const {
    containerStyle,
    leftContainerStyle,
    rightContainerStyle,
    inputStyle,
  } = mergeStyles(getIconTextInputStyles, getStyles)(
    { hasLeftIcon: !!leftIcon, hasRightIcon: !!rightIcon },
    theme,
  );

  return (
    <View style={containerStyle}>
      <View style={leftContainerStyle}>{leftIcon}</View>
      <TextInput
        ref={innerRef}
        getStyles={() => ({
          inputStyle,
        })}
        {...textInputProps}
      />
      <View style={rightContainerStyle}>{rightIcon}</View>
    </View>
  );
};

export const IconTextInput = React.forwardRef<RNTextInput, IconTextInputProps>(
  (props, ref) => <IconTextInputBase {...props} innerRef={ref} />,
);
