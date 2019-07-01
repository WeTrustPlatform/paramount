import * as React from 'react';
import { Platform } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { GetLabelStyles, getLabelStyles, LabelStyles } from './Label.styles';
import { Text, TextProps } from './Text';

// tslint:disable-next-line
// @ts-ignore
export interface LabelProps extends TextProps {
  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetLabelStyles, DeepPartial<LabelStyles>>;
}

export const Label = (props: LabelProps) => {
  const { children, getStyles, ...textProps } = props;
  const theme = useTheme();

  const { labelStyle } = mergeStyles(
    getLabelStyles,
    getStyles,
    theme.components.getLabelStyles,
  )(props, theme);

  return (
    <Text
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'label' : 'none'}
      getStyles={() => ({ textStyle: labelStyle })}
      {...textProps}
    >
      {children}
    </Text>
  );
};
