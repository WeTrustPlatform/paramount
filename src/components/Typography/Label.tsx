import * as React from 'react';
import { Platform } from 'react-native';

import withTheme from '../../theme/withTheme';
import Text, { TextProps } from './Text';

const LabelBase = (props: TextProps) => {
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

export const Label = withTheme(LabelBase);
export default Label;
