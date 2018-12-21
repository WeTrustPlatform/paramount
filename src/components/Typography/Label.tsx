import * as React from 'react';
import { Platform } from 'react-native';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const LabelBase = (props: ITextProps) => {
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
