import * as React from 'react';
import { PickerProps } from 'react-native';

import { withTheme } from '../../theme';
import { FormField, FormFieldProps } from '../FormField';
import Picker from './Picker';

export interface PickerFieldProps extends FormFieldProps, PickerProps {}

const PickerFieldBase = (props: PickerFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <Picker {...passThroughProps} />
    </FormField>
  );
};

export const PickerField = withTheme(PickerFieldBase);
export default PickerField;
