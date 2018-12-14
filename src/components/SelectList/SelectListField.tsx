import * as React from 'react';

import { withTheme } from '../../theme';
import { FormField, IFormFieldProps } from '../FormField';
import SelectList, { ISelectListProps } from './SelectList';
import { ISelectListItemProps } from './SelectListItem';

export interface ISelectListFieldProps
  extends IFormFieldProps<Array<React.ReactElement<ISelectListItemProps>>>,
    ISelectListProps {}

const SelectListFieldBase = (props: ISelectListFieldProps) => {
  const { label, error, description, ...passThroughProps } = props;

  return (
    <FormField label={label} error={error} description={description}>
      <SelectList {...passThroughProps} />
    </FormField>
  );
};

export const SelectListField = withTheme(SelectListFieldBase);
export default SelectListField;
