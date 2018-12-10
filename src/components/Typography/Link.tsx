import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const LinkBase = (props: ITextProps) => {
  return <Text color="primary" {...props} />;
};

export const Link = withTheme(LinkBase);
export default Link;
