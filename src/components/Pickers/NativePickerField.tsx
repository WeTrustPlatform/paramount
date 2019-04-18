import * as React from 'react';

import { FormField, FormFieldProps } from '../Form';
import { NativePicker, NativePickerProps } from './NativePicker';

export interface NativePickerFieldProps
  extends FormFieldProps,
    NativePickerProps {}

export const NativePickerField = (props: NativePickerFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <NativePicker {...passThroughProps} />
    </FormField>
  );
};
