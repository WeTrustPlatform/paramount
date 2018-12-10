import * as React from 'react';

import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

const StrongBase = (props: ITextProps) => {
  const { children, dangerouslySetInlineStyle, ...textProps } = props;

  return (
    <Text
      accessibilityLabel="strong" // Web
      dangerouslySetInlineStyle={{
        textStyle: {
          fontWeight: '600',
          ...(dangerouslySetInlineStyle && dangerouslySetInlineStyle.textStyle),
        },
      }}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Strong = withTheme(StrongBase);
export default Strong;
