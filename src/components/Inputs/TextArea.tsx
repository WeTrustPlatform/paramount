import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import TextInput, { TextInputProps } from './TextInput';
import { getTextInputStyles } from './TextInput.styles';

export interface TextAreaProps extends TextInputProps {
  numberOfLines?: number;
  theme: Theme;
}

const TextAreaBase = (props: TextAreaProps) => {
  const {
    numberOfLines = 3,
    size = 'medium',
    theme,
    ...textInputProps
  } = props;
  const controlHeight = theme.controlHeights[size];

  return (
    <TextInput
      multiline
      size={size}
      numberOfLines={numberOfLines}
      getStyles={(...params) => {
        const defaultTextInputStyles = getTextInputStyles(...params);
        return {
          ...defaultTextInputStyles,
          inputStyle: {
            ...defaultTextInputStyles.inputStyle,
            height: numberOfLines * controlHeight,
            paddingBottom: 8,
            paddingTop: 8,
          },
        };
      }}
      {...textInputProps}
    />
  );
};

export const TextArea = withTheme(TextAreaBase);
export default TextArea;
