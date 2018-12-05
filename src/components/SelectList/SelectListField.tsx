import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, IFormFieldProps } from '../FormField';
import SelectList, { ISelectListProps } from './SelectList';

export interface ISelectListFieldProps
  extends IFormFieldProps,
    ISelectListProps {}

const SelectListFieldWithoutTheme = (props: ISelectListFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <SelectList {...passThroughProps} />
    </FormField>
  );
};

export const SelectListField = withTheme(SelectListFieldWithoutTheme);
export default SelectListField;
