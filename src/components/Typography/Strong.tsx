import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const StrongWithoutTheme = (props: ITextProps) => {
  const { children, dangerouslySetInlineStyle, ...textProps } = props;

  return (
    <Text
      accessibilityLabel="strong" // Web
      dangerouslySetInlineStyle={{
        __style: {
          ...(dangerouslySetInlineStyle
            ? dangerouslySetInlineStyle.__style
            : {}),
          fontWeight: '600',
        },
      }}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Strong = withTheme(StrongWithoutTheme);
export default Strong;
