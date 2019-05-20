import * as React from 'react';
import { TextInput as RNTextInput, TouchableOpacity } from 'react-native';

import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import { IconTextInput, IconTextInputProps } from './IconTextInput';

export interface ClearableTextInputProps extends IconTextInputProps {
  onClear?: () => void;
  isClearable?: boolean;
}

const ClearableTextInputBase = (props: ClearableTextInputProps) => {
  const {
    onClear,
    innerRef,
    onChangeText,
    value,
    isClearable,
    rightIcon,
    ...textInputWithIconProps
  } = props;
  const theme = useTheme();

  return (
    <IconTextInput
      ref={innerRef}
      onChangeText={onChangeText}
      value={value}
      rightIcon={
        value && isClearable ? (
          <TouchableOpacity
            onPress={() => {
              if (onChangeText) onChangeText('');
              if (onClear) onClear();
            }}
          >
            <Icon name="x" size={24} color={theme.colors.text.default} />
          </TouchableOpacity>
        ) : (
          rightIcon || null
        )
      }
      {...textInputWithIconProps}
    />
  );
};

export const ClearableTextInput = React.forwardRef<
  RNTextInput,
  ClearableTextInputProps
>((props, ref) => <ClearableTextInputBase {...props} innerRef={ref} />);
