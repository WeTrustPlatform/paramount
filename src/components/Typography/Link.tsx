import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { TextProps } from './Text';

const LinkBase = (props: TextProps) => {
  return <Text color="primary" {...props} />;
};

export const Link = withTheme(LinkBase);
export default Link;
