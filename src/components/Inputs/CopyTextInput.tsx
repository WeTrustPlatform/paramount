import * as React from 'react';
import {
  Clipboard,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';

import { Icon } from '../../icons';
import { ThemeContext } from '../../theme';
import IconTextInput, { IconTextInputProps } from './IconTextInput';

export interface CopyTextInputProps extends IconTextInputProps {
  onCopy?: (text: string) => void;
}

const CopyTextInputBase = (props: CopyTextInputProps) => {
  const { onCopy, innerRef, value, ...textInputWithIconProps } = props;
  const theme = React.useContext(ThemeContext);

  return (
    <IconTextInput
      ref={innerRef}
      rightIcon={
        value ? (
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(value);
              if (onCopy) {
                onCopy(value);
              }
            }}
          >
            <Icon name="copy" size={24} color={theme.colors.text.default} />
          </TouchableOpacity>
        ) : null
      }
      value={value}
      {...textInputWithIconProps}
    />
  );
};

export const CopyTextInput = React.forwardRef<RNTextInput, CopyTextInputProps>(
  (props, ref) => <CopyTextInputBase {...props} innerRef={ref} />,
);

export default CopyTextInput;
