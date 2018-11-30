import * as React from 'react';

import { withTheme } from '../../theme';
import FormField, { IFormFieldProps } from '../FormField';
import TextInput, { ITextInputProps } from './TextInput';

const TextInputFieldWithoutTheme = (
  props: IFormFieldProps & ITextInputProps,
) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <TextInput isInvalid={!!error} {...passThroughProps} />
    </FormField>
  );
};

export const TextInputField = withTheme(TextInputFieldWithoutTheme);
export default TextInputField;
