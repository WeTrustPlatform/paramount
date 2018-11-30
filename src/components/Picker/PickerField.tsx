import * as React from 'react';
import { PickerProps } from 'react-native';

import FormField, { IFormFieldProps } from '../FormField';
import Picker from './Picker';

export default class PickerField extends React.Component<
  IFormFieldProps & PickerProps
> {
  public render() {
    const { label, error, description, ...passThroughProps } = this.props;

    return (
      <FormField label={label} error={error} description={description}>
        <Picker {...passThroughProps} />
      </FormField>
    );
  }
}
