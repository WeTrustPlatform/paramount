import * as React from 'react';

import { Box } from '../Layout';
import { Label, Text } from '../Typography';

export interface IFormFieldProps {
  error?: string;
  label?: string;
  description?: string;
  children: React.ReactElement<any>;
}

const FormField = (props: IFormFieldProps) => {
  const { label, error, children, description, ...passThroughProps } = props;

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
