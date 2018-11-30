import * as React from 'react';

import { ITheme, withTheme } from '../../theme';
import TextInput, { ITextInputProps } from '../TextInput/TextInput';

export interface ITextAreaProps extends ITextInputProps {
  numberOfLines?: number;
  theme: ITheme;
}

const TextAreaWithoutTheme = (props: ITextAreaProps) => {
  const { numberOfLines = 3, size = 'medium', theme, ...restProps } = props;
  const controlHeight = theme.themeVariables.controlHeights[size];

  return (
    <TextInput
      multiline
      size={size}
      numberOfLines={numberOfLines}
      dangerouslySetInlineStyle={{
        __style: {
          height: numberOfLines * controlHeight,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
      {...restProps}
    />
  );
};

export const TextArea = withTheme(TextAreaWithoutTheme);
export default TextArea;
