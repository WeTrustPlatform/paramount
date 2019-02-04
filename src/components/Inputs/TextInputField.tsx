import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, FormFieldProps } from '../Form';
import TextInput, { TextInputProps } from './TextInput';

export interface TextInputFieldProps extends FormFieldProps, TextInputProps {}

const TextInputFieldBase = (props: TextInputFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <TextInput isInvalid={!!error} {...passThroughProps} />
    </FormField>
  );
};

export const TextInputField = withTheme(TextInputFieldBase);
export default TextInputField;
