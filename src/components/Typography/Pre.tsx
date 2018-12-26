import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { TextProps } from './Text';

const PreBase = (props: TextProps) => {
  const { children, ...textProps } = props;

  return <Text {...textProps}>{children}</Text>;
};

export const Pre = withTheme(PreBase);
export default Pre;
