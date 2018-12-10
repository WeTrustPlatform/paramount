import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, IFormFieldProps } from '../FormField';
import TextArea, { ITextAreaProps } from './TextArea';

export interface ITextAreaFieldProps extends IFormFieldProps, ITextAreaProps {}

const TextAreaFieldBase = (props: ITextAreaFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <TextArea isInvalid={!!error} {...passThroughProps} />
    </FormField>
  );
};

export const TextAreaField = withTheme(TextAreaFieldBase);
export default TextAreaField;
