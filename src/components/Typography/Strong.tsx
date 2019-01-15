import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { TextProps } from './Text';
import { getTextStyles } from './Text.styles';

const StrongBase = (props: TextProps) => {
  const { children, getStyles = getTextStyles, theme, ...textProps } = props;

  return (
    <Text
      accessibilityLabel="strong" // Web
      getStyles={(...params) => {
        return {
          textStyle: {
            ...(getStyles && getStyles(...params).textStyle),
            fontWeight: '600',
          },
        };
      }}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Strong = withTheme(StrongBase);
export default Strong;
