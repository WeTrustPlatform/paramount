import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { useTheme } from '../../theme';
import { TextInput, TextInputProps } from './TextInput';

export interface TextAreaProps extends TextInputProps {
  numberOfLines?: number;
}

const TextAreaBase = (props: TextAreaProps) => {
  const { numberOfLines = 3, size = 'medium', ...textInputProps } = props;
  const theme = useTheme();
  const controlHeight = theme.controlHeights[size];

  return (
    <TextInput
      multiline
      size={size}
      numberOfLines={numberOfLines}
      getStyles={() => ({
        inputStyle: {
          height: numberOfLines * controlHeight,
          paddingBottom: 8,
          paddingTop: 8,
        },
      })}
      {...textInputProps}
    />
  );
};

export const TextArea = React.forwardRef<RNTextInput, TextAreaProps>(
  (props, ref) => <TextAreaBase {...props} innerRef={ref} />,
);
