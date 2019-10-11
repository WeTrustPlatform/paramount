import React from 'react';

import { useTheme } from '../../theme';
import { Text, TextProps } from './Text';

export const Paragraph = (props: TextProps) => {
  const theme = useTheme();

  return (
    <Text
      // @ts-ignore
      accessibilityLabel="p"
      style={{
        marginVertical: theme.textSizes.medium.fontSize,
      }}
      {...props}
    />
  );
};
