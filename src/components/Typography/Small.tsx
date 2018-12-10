import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const SmallBase = (props: ITextProps) => {
  const { children, ...textProps } = props;

  return (
    <Text size="small" {...textProps}>
      {children}
    </Text>
  );
};

export const Small = withTheme(SmallBase);
export default Small;
