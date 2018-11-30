import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { ITheme } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import Text, { ITextProps } from './Text';

export interface ICodeProps {
  appearance?: 'default' | 'minimal';
  theme: ITheme;
}

const CodeWithoutTheme = (props: ICodeProps & ITextProps) => {
  const { appearance, theme, ...textProps } = props;

  const code = <Text fontFamily="mono" {...textProps} />;

  if (appearance === 'default') {
    return (
      <View
        style={[
          styles.default,
          {
            backgroundColor: theme.themeVariables.colors.background.tint2,
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

export const Code = withTheme(CodeWithoutTheme);
export default Code;
