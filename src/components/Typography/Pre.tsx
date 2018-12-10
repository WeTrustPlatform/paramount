import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const PreBase = (props: ITextProps) => {
  const { children, ...textProps } = props;

  return <Text {...textProps}>{children}</Text>;
};

export const Pre = withTheme(PreBase);
export default Pre;
