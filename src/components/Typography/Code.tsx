import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '../../theme';
import { Text, TextProps } from './Text';

export interface CodeProps extends TextProps {
  appearance?: 'default' | 'minimal';
}

export const Code = (props: CodeProps) => {
  const { appearance, ...textProps } = props;
  const theme = useTheme();

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
