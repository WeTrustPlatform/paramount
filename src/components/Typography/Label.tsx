import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const LabelBase = (props: ITextProps) => {
  const { children, ...textProps } = props;

  return (
    <Text
      // @ts-ignore
      accessibilityRole="label" // Web
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Label = withTheme(LabelBase);
export default Label;
