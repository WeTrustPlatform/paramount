import * as React from 'react';

import { Text, TextProps } from './Text';

export const Link = (props: TextProps) => {
  return <Text color="primary" {...props} />;
};
