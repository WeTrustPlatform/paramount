import * as React from 'react';

import { Box } from '../Layout';
import { Label, Text } from '../Typography';

export interface FormFieldProps<TChildren = any> {
  error?: string;
  label?: string;
  description?: string;
  children?: TChildren;
}

const FormField = (props: FormFieldProps) => {
  const {
    label,
    error,
    children = null,
    description,
    ...passThroughProps
  } = props;

  return (
    <Box>
      {label && (
        <Box marginBottom={1}>
          <Label>{label}</Label>
        </Box>
      )}
      <Box marginBottom={1}>
        {React.cloneElement(children, passThroughProps)}
      </Box>
      {error && (
        <Box marginBottom={1}>
          <Text color="danger">{error}</Text>
        </Box>
      )}
      {description && <Text>{description}</Text>}
    </Box>
  );
};

export default FormField;
