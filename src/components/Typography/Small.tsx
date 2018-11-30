import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const SmallWithoutTheme = (props: ITextProps) => {
  const { children, ...textProps } = props;

  return (
    <Text size="small" {...textProps}>
      {children}
    </Text>
  );
};

export const Small = withTheme(SmallWithoutTheme);
export default Small;
