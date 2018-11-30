import * as React from 'react';

import FormField, { IFormFieldProps } from '../FormField';
import SelectList, { ISelectListProps } from './SelectList';

export default class SelectField extends React.Component<
  IFormFieldProps & ISelectListProps
> {
  public render() {
    const { label, error, description, ...passThroughProps } = this.props;

    return (
      <FormField label={label} error={error} description={description}>
        <SelectList {...passThroughProps} />
      </FormField>
    );
  }
}
