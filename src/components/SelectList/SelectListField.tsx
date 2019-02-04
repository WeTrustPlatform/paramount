import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, FormFieldProps } from '../Form';
import SelectList, { SelectListProps } from './SelectList';

export interface SelectListFieldProps extends FormFieldProps, SelectListProps {}

const SelectListFieldBase = (props: SelectListFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <SelectList {...passThroughProps} />
    </FormField>
  );
};

export const SelectListField = withTheme(SelectListFieldBase);
export default SelectListField;
