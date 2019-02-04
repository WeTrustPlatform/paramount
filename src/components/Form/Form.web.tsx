import * as React from 'react';

import { FormProps } from './Form';

// On the web <form> enables native behavior such as `Enter` to submit
const Form = ({ children, onSubmit }: FormProps) => (
  <form onSubmit={onSubmit}>{children}</form>
);

export default Form;
