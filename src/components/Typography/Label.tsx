import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const LabelWithoutTheme = (props: ITextProps) => {
  const { children, ...textProps } = props;

  return (
    <Text
      accessibilityRole="label" // Web
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Label = withTheme(LabelWithoutTheme);
export default Label;
