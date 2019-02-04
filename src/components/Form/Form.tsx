import * as React from 'react';

import { Box } from '../Layout';

export interface FormProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

// In React Native there is no corresponding <form> tag
const Form = ({ children }: FormProps) => <Box>{children}</Box>;

export default Form;
