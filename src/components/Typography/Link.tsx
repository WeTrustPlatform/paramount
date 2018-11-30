import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const LinkWithoutTheme = (props: ITextProps) => {
  return <Text color="primary" {...props} />;
};

export const Link = withTheme(LinkWithoutTheme);
export default Link;
