import * as React from 'react';
import { TextInput as RNTextInput, TouchableOpacity } from 'react-native';

import { Icon } from '../../icons';
import { ThemeContext } from '../../theme';
import IconTextInput, { IconTextInputProps } from './IconTextInput';

export interface ClearableTextInputProps extends IconTextInputProps {
  onClear?: () => void;
}

const ClearableTextInputBase = (props: ClearableTextInputProps) => {
  const {
    onClear,
    innerRef,
    onChangeText,
    value,
    ...textInputWithIconProps
  } = props;
  const theme = React.useContext(ThemeContext);

  return (
    <IconTextInput
      ref={innerRef}
      rightIcon={
        value ? (
          <TouchableOpacity
            onPress={() => {
              if (onChangeText) onChangeText('');
              if (onClear) onClear();
            }}
          >
            <Icon name="x" size={24} color={theme.colors.text.default} />
          </TouchableOpacity>
        ) : null
      }
      onChangeText={onChangeText}
      value={value}
      {...textInputWithIconProps}
    />
  );
};

export const ClearableTextInput = React.forwardRef<
  RNTextInput,
  ClearableTextInputProps
>((props, ref) => <ClearableTextInputBase {...props} innerRef={ref} />);

export default ClearableTextInput;
