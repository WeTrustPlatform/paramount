import * as React from 'react';

import { ITheme, withTheme } from '../../theme';
import TextInput, { ITextInputProps } from '../TextInput/TextInput';

export interface ITextAreaProps extends ITextInputProps {
  numberOfLines?: number;
  theme: ITheme;
}

const TextAreaBase = (props: ITextAreaProps) => {
  const {
    numberOfLines = 3,
    size = 'medium',
    theme,
    ...textInputProps
  } = props;
  const controlHeight = theme.themeVariables.controlHeights[size];

  return (
    <TextInput
      multiline
      size={size}
      numberOfLines={numberOfLines}
      dangerouslySetInlineStyle={{
        inputStyle: {
          height: numberOfLines * controlHeight,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
      {...textInputProps}
    />
  );
};

export const TextArea = withTheme(TextAreaBase);
export default TextArea;
