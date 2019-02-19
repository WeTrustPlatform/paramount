import * as React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';

import { Icon } from '../../icons';
import { ThemeContext } from '../../theme';
import ClearableTextInput, {
  ClearableTextInputProps,
} from './ClearableTextInput';

// tslint:disable-next-line
export interface SearchTextInputProps extends ClearableTextInputProps {}

const SearchTextInputBase = (props: SearchTextInputProps) => {
  const { onClear, innerRef, ...textInputWithIconProps } = props;
  const theme = React.useContext(ThemeContext);

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
