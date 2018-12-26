import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, FormFieldProps } from '../FormField';
import SelectList, { SelectListProps } from './SelectList';
import { SelectListItemProps } from './SelectListItem';

export interface SelectListFieldProps
  extends FormFieldProps<Array<React.ReactElement<SelectListItemProps>>>,
    SelectListProps {}

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
