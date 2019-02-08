import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, FormFieldProps } from '../Form';
import PhoneNumberInput, { PhoneNumberInputProps } from './PhoneNumberInput';

export interface PhoneNumberInputFieldProps
  extends FormFieldProps,
    PhoneNumberInputProps {}

const PhoneNumberInputFieldBase = (props: PhoneNumberInputFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <PhoneNumberInput isInvalid={!!error} {...passThroughProps} />
    </FormField>
  );
};

export const PhoneNumberInputField = withTheme(PhoneNumberInputFieldBase);
export default PhoneNumberInputField;
