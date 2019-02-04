import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, FormFieldProps } from '../Form';
import TextArea, { TextAreaProps } from './TextArea';

export interface TextAreaFieldProps extends FormFieldProps, TextAreaProps {}

const TextAreaFieldBase = (props: TextAreaFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <TextArea isInvalid={!!error} {...passThroughProps} />
    </FormField>
  );
};

export const TextAreaField = withTheme(TextAreaFieldBase);
export default TextAreaField;
