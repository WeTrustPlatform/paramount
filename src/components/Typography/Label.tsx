import * as React from 'react';
import { Platform } from 'react-native';

import { Text, TextProps } from './Text';

export const Label = (props: TextProps) => {
  const { children, ...textProps } = props;

  return (
    <Text
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'label' : 'none'}
      {...textProps}
    >
      {children}
    </Text>
  );
};
