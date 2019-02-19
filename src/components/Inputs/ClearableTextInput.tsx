import * as React from 'react';
import { TextInput as RNTextInput, TouchableOpacity } from 'react-native';

import { Icon } from '../../icons';
import { ThemeContext } from '../../theme';
import TextInputWithIcon, { TextInputWithIconProps } from './TextInputWithIcon';

export interface ClearableTextInputProps extends TextInputWithIconProps {
  onClear?: () => void;
}

const ClearableTextInputBase = (props: ClearableTextInputProps) => {
  const { onClear, innerRef, onChangeText, ...textInputWithIconProps } = props;
  const theme = React.useContext(ThemeContext);

  return (
    <TextInputWithIcon
      ref={innerRef}
      rightIcon={
        <TouchableOpacity
          onPress={() => {
            if (onChangeText) onChangeText('');
            if (onClear) onClear();
          }}
        >
          <Icon name="x" size={24} color={theme.colors.text.default} />
        </TouchableOpacity>
      }
      onChangeText={onChangeText}
      {...textInputWithIconProps}
    />
  );
};

export const ClearableTextInput = React.forwardRef<
  RNTextInput,
  ClearableTextInputProps
>((props, ref) => <ClearableTextInputBase {...props} innerRef={ref} />);

export default ClearableTextInput;
