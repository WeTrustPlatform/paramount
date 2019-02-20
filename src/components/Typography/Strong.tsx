import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { TextProps } from './Text';

const StrongBase = (props: TextProps) => {
  const { children, getStyles, theme, ...textProps } = props;

  return (
    <Text
      accessibilityLabel="strong" // Web
      getStyles={(...params) => ({
        textStyle: {
          fontWeight: '600',
          ...(getStyles && getStyles(...params).textStyle),
        },
      })}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Strong = withTheme(StrongBase);
export default Strong;
