import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { TextProps } from './Text';

const SmallBase = (props: TextProps) => {
  const { children, ...textProps } = props;

  return (
    <Text size="small" {...textProps}>
      {children}
    </Text>
  );
};

export const Small = withTheme(SmallBase);
export default Small;
