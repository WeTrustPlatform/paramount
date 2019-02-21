import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, FormFieldProps } from '../Form';
import NativePicker, { NativePickerProps } from './NativePicker';

export interface NativePickerFieldProps
  extends FormFieldProps,
    NativePickerProps {}

const NativePickerFieldBase = (props: NativePickerFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <NativePicker {...passThroughProps} />
    </FormField>
  );
};

export const NativePickerField = withTheme(NativePickerFieldBase);
export default NativePickerField;
