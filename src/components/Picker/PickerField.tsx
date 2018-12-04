import * as React from 'react';
import { PickerProps } from 'react-native';

import { withTheme } from '../../theme';
import FormField, { IFormFieldProps } from '../FormField';
import Picker from './Picker';

export interface IPickerFieldProps extends IFormFieldProps, PickerProps {}

const PickerFieldWithoutTheme = (props: IPickerFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <Picker {...passThroughProps} />
    </FormField>
  );
};

export const PickerField = withTheme(PickerFieldWithoutTheme);
export default PickerField;
