import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const PreWithoutTheme = (props: ITextProps) => {
  const { children, ...textProps } = props;

  return <Text {...textProps}>{children}</Text>;
};

export const Pre = withTheme(PreWithoutTheme);
export default Pre;
