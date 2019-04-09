import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import Text, { TextProps } from './Text';

export interface CodeProps {
  appearance?: 'default' | 'minimal';
  theme: Theme;
}

const CodeBase = (props: CodeProps & TextProps) => {
  const { appearance, theme, ...textProps } = props;

  const code = <Text fontFamily="mono" {...textProps} />;

  if (appearance === 'default') {
    return (
      <View
        style={[
          styles.default,
          {
            backgroundColor: theme.colors.background.greyDefault,
          },
        ]}
      >
        {code}
      </View>
    );
  }

  return code;
};

const styles = StyleSheet.create({
  default: {
    borderRadius: 2,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
  },
});

export const Code = withTheme(CodeBase);
export default Code;
