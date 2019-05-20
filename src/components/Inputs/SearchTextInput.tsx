import * as React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';

import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import {
  ClearableTextInput,
  ClearableTextInputProps,
} from './ClearableTextInput';

// tslint:disable-next-line
export interface SearchTextInputProps extends ClearableTextInputProps {}

const SearchTextInputBase = (props: SearchTextInputProps) => {
  const { onClear, innerRef, ...textInputWithIconProps } = props;
  const theme = useTheme();

  return (
    <ClearableTextInput
      ref={innerRef}
      leftIcon={
        <View>
          <Icon name="search" size={24} color={theme.colors.text.default} />
        </View>
      }
      {...textInputWithIconProps}
    />
  );
};

export const SearchTextInput = React.forwardRef<
  RNTextInput,
  SearchTextInputProps
>((props, ref) => <SearchTextInputBase {...props} innerRef={ref} />);

export default SearchTextInput;
